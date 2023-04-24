
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

const Timeline = observer(() => {
    const storage = useContext(StorageContext)
    const [timelineFrameRef, setTimelineFrameRef] = useState(null)
    
    let lastYear = ""
    let newYear = false

    console.log(storage.displayedStories)

    return <div id="timelineFrame" ref={setTimelineFrameRef}>
        <div id="timelineGrid"></div>
        <div id="timelineIcons">
            {storage.displayedStories.map((id) => {
                console.log(storage.stories)
                console.log(id)
                const currentStory = storage.stories[id]
                console.log(currentStory)
                if (newYear = currentStory.year !== lastYear) lastYear = currentStory.year
                return <span key={id}>
                    {newYear && <h4>{lastYear}</h4>}
                    <div className={`timelineIconHolder ${currentStory.category}`}>
                        <div className="timelineIcon" style={{background: generateIconCssColors(currentStory.themes)}}/>
                    </div>
                </span>
            })}
        </div>
        {timelineFrameRef && <TimelineHighlight parentEl={timelineFrameRef}/>}
    </div>
})
export {Timeline}