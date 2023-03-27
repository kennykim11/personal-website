import {StorageContext} from "./Storage"

import {useContext, useRef, useEffect, useState} from 'react'
import {observer} from 'mobx-react-lite'

interface ITimelineHighlightProps {
    parentEl: HTMLElement
}

const TimelineHighlight = observer((props: ITimelineHighlightProps) => {
    const storage = useContext(StorageContext)
    const timelineHighlightRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const timelineEl = props.parentEl
        const cardAreaEl = storage.cardAreaScroll
        const percentage = cardAreaEl.scrollTop / (cardAreaEl.scrollHeight - cardAreaEl.clientHeight)
        const highlightHeight = timelineEl.scrollHeight * (cardAreaEl.clientHeight/cardAreaEl.scrollHeight)
        const hightlightTop = percentage * (timelineEl.scrollHeight - highlightHeight)
        timelineHighlightRef.current.style.height = `${highlightHeight}px`
        timelineHighlightRef.current.style.top = `${hightlightTop}px`
    }, [props, storage.cardAreaScroll])

    return <div id="timelineHighlight" ref={timelineHighlightRef}/>
})

export {TimelineHighlight}