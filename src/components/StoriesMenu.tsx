import {CardNav} from "./CardNav"
import {CardArea} from "./CardArea"
import {Summary} from "./Summary"
import {StorageContext} from "./Storage"

import {useSearchParams} from "react-router-dom"
import {useContext, useEffect, useState} from "react"
import { LandingPage } from "./LandingPage"

interface IStoriesMenu_props {
    title: string
}

export function StoriesMenu(props: IStoriesMenu_props) {

    useEffect(() => {
        document.title = props.title
    }, [])

    const storage = useContext(StorageContext)
    const [searchParams] = useSearchParams()
    return <div style={{width: '100%'}}>
        {window.sessionStorage.getItem("firstTime")==null && <LandingPage/>}
        <div id="storiesMenu">
            <CardNav/>
            <CardArea/>
        </div>
        {storage.summaryMode && <Summary/>}
    </div>
}