import {StorageContext} from "./Storage"

import {useContext, useRef, useEffect} from 'react'
import {observer} from 'mobx-react-lite'

interface ITimelineHighlight_props {
    parentEl: HTMLElement
}

const TimelineHighlight = observer((props: ITimelineHighlight_props) => {
    const storage = useContext(StorageContext)
    const timelineHighlightRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const timelineEl = props.parentEl
        const cardAreaEl = storage.cardAreaScroll
        const percentage = cardAreaEl.scrollTop / (cardAreaEl.scrollHeight - cardAreaEl.clientHeight)
        const highlightHeight = timelineEl.scrollHeight * (cardAreaEl.clientHeight/cardAreaEl.scrollHeight)
        const hightlightTop = percentage * (timelineEl.scrollHeight - highlightHeight)
        const highlightBottom = hightlightTop+highlightHeight
        if ((timelineEl.clientHeight+timelineEl.scrollTop) < (highlightBottom)) {
            timelineEl.scroll({top: highlightBottom-timelineEl.clientHeight, behavior: "auto"})
        }
        if (hightlightTop < timelineEl.scrollTop) {
            timelineEl.scroll({top: hightlightTop, behavior: "auto"})}
        timelineHighlightRef.current.style.height = `${highlightHeight}px`
        timelineHighlightRef.current.style.top = `${hightlightTop}px`
    }, [props, storage.cardAreaScroll])

    function clickHandler (e: MouseEvent): any {
        // console.log(e.pageY, e.pageY - (parseFloat(timelineHighlightRef.current.style.height)/2))
        timelineHighlightRef.current.style.top = `${e.pageY - (parseFloat(timelineHighlightRef.current.style.height)/2)}px`
    }

    //props.parentEl.onclick = clickHandler

    return <div id="timelineHighlight" ref={timelineHighlightRef}/>
})

export {TimelineHighlight}