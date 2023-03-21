import {Summary} from "./Summary"

import {Suspense, lazy, useContext} from "react"
import {Route, useSearchParams} from "react-router-dom"
import {StorageContext} from "./Storage"

import {observer} from 'mobx-react-lite'

const Story = observer((props) => {
    const storage = useContext(StorageContext)

    const PageComponent = lazy(storage.stories[props.id].page)

    // const [searchParams] = useSearchParams()
    // const enableSummary = searchParams.has('summary')
    const enableSummary = storage.summaryMode

    return <Suspense fallback={<div id="loadingScreen">Loading...</div>}>
        <div style={{width: "100%"}}>
            <div id="detail" className={enableSummary?"popout":""}>
                <PageComponent story={storage.stories[props.id]}/>
            </div>
            {enableSummary && <Summary/>}
        </div>
    </Suspense>
})
export {Story}