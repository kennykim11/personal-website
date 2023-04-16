import {Summary} from "./Summary"
import {StorageContext} from "./Storage"
import {IconButton} from "./IconButton"
import {Link} from "react-router-dom"
import {faSquareXmark} from '@fortawesome/free-solid-svg-icons'

import {Suspense, lazy, useContext, useEffect, useState} from "react"
import Typist from 'react-typist';
import {observer} from 'mobx-react-lite'

interface IStory_props {
    id: string
    title: string
}



const Story = observer((props: IStory_props) => {
    const [elpiseHolder, setElipseHolder] = useState(<div/>)
    const elipses = <Typist cursor={{show: false}} onTypingDone={()=>{setElipseHolder(<div/>); console.log(elpiseHolder); setElipseHolder(elipses); }} avgTypingDelay={1500}>
        ...
        </Typist>

        
    useEffect(() => {
        document.title = props.title
        setElipseHolder(elipses)
    }, [])

    const storage = useContext(StorageContext)

    const PageComponent = lazy(storage.stories[props.id].page)

    const enableSummary = storage.summaryMode

    return <Suspense fallback={<div id="loadingScreen">
            <h1>Loading
                {elpiseHolder}
            </h1>
        </div>}>
        <div style={{width: "100%", overflowY: "scroll"}}>
            <Link className="closeButton" to="/">
                <IconButton icon={faSquareXmark}/>
            </Link>
            <div id="detail" className={enableSummary?"popout":""}>
                <PageComponent story={storage.stories[props.id]}/>
            </div>
            {enableSummary && <Summary/>}
        </div>
    </Suspense>
})
export {Story}