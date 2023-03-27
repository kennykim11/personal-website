import {Summary} from "./Summary"

import {Suspense, lazy, useContext, useEffect} from "react"
import {StorageContext} from "./Storage"

import {observer} from 'mobx-react-lite'

interface IStory_props {
    id: string
    title: string
}

const Story = observer((props: IStory_props) => {
    useEffect(() => {
        document.title = props.title
    }, [])

    const storage = useContext(StorageContext)

    const PageComponent = lazy(storage.stories[props.id].page)

    // const [searchParams] = useSearchParams()
    // const enableSummary = searchParams.has('summary')
    const enableSummary = storage.summaryMode

    return <Suspense fallback={<div id="loadingScreen"><h1>Loading...</h1></div>}>
        <div style={{width: "100%"}}>
            <div id="detail" className={enableSummary?"popout":""}>
                <PageComponent story={storage.stories[props.id]}/>
            </div>
            {enableSummary && <Summary/>}
        </div>
    </Suspense>
})
export {Story}