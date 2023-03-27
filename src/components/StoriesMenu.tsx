import {CardNav} from "./CardNav"
import {CardArea} from "./CardArea"
import {Summary} from "./Summary"
import {StorageContext} from "./Storage"

import {useSearchParams} from "react-router-dom"
import {useContext} from "react"

export function StoriesMenu() {
    const storage = useContext(StorageContext)
    const [searchParams] = useSearchParams()
    return <div style={{width: '100%'}}>
        <div id="storiesMenu">
            <CardNav/>
            <CardArea/>
        </div>
        {storage.summaryMode && <Summary/>}
    </div>
}