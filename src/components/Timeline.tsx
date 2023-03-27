
import {StorageContext} from "./Storage"
import {TimelineHighlight} from "./TimelineHighlight"

import {useContext, useEffect, useRef, useState} from 'react'
import {observer} from 'mobx-react-lite'

const themeColors = {
    explo: "var(--accent1)",
    collab: "var(--accent3)",
    prob: "var(--accent4)"
}

function generateIconCssColors(themes) {
    const interval = Math.round(100/themes.length)
    let percentage = 0
    let str = "linear-gradient("
    themes.forEach(theme => {
        str += `${themeColors[theme]} ${percentage}%, `
        percentage += interval
        str += `${themeColors[theme]} ${percentage}%, `
    });
    str = str.slice(0, -2) + ")"
    return str
}

function handleScroll(event) {
    let el = event.srcElement
    console.log(el.scrollTop, el.scrollHeight, el.clientHeight)
}

const Timeline = observer(() => {
    const storage = useContext(StorageContext)
    const [timelineFrame, setTimelineFrame] = useState(null)
    
    let lastYear = ""
    let newYear = false

    return <div id="timelineFrame" ref={setTimelineFrame}>
        <div id="timelineGrid"></div>
        <div id="timelineIcons">
            {storage.displayedStories.map((id) => {
                const currentStory = storage.stories[id]
                if (newYear = currentStory.year !== lastYear) lastYear = currentStory.year
                return <span key={id}>
                    {newYear && <h4>{lastYear}</h4>}
                    <span className={`timelineIcon ${currentStory.category}`} style={{background: generateIconCssColors(currentStory.themes)}}/>
                </span>
            })}
        </div>
        {timelineFrame && <TimelineHighlight parentEl={timelineFrame}/>}
    </div>
})
export {Timeline}