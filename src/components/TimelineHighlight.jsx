import {StorageContext} from "./Storage"

import {useContext, useRef, useEffect, useState} from 'react'
import {observer} from 'mobx-react-lite'

const TimelineHighlight = observer((props) => {
    const storage = useContext(StorageContext)
    let timelineEl = null
    let scroll = storage.cardAreaScroll
    let percentage = 0
    const [highlightHeight, setHighlightHeight] = useState(0)
    const [highlightTop, setHighlightTop] = useState(0)

    useEffect(() => {
        console.log(props)
        timelineEl = props.parentEl
        if (timelineEl == null) return
        percentage = scroll.scrollTop / (scroll.clientHeight-scroll.scrollHeight)
        console.log(storage.displayedStories)
        console.log(storage.cardAreaScroll.clientHeight)
        setHighlightHeight(timelineEl.clientHeight * (scroll.scrollHeight/scroll.clientHeight))
        setHighlightTop(percentage * (timelineEl.clientHeight - highlightHeight))
        console.log(percentage * (timelineEl.clientHeight - highlightHeight))
    }, [props, storage.cardAreaScroll])

    return <div id="timelineHighlight" style={{width: "5px", height: highlightHeight, top: highlightTop}}/>
})

export {TimelineHighlight}