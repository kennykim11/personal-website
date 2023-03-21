
import {StorageContext} from "./Storage"
import * as styles from "./styles.scss"

import React, {useContext, useEffect, useRef} from 'react'
import {observer} from 'mobx-react-lite'

const themeColors = {
    explo: "#B76AEF",
    collab: "#F3BA38",
    prob: "#5781EF"
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
    const storage = useContext(StorageContext);
    let lastYear = ""
    let newYear = false

    const timelineAreaRef = useRef(null)

    return <div id="timelineFrame" ref={timelineAreaRef}>
        <div id="timelineGrid"></div>
        <div id="timelineIcons">
            {storage.displayedStories.map((id) => {
                const currentStory = storage.stories[id]
                if (newYear = currentStory.year !== lastYear) lastYear = currentStory.year
                return <span key={id}>
                    {newYear && <h3>{lastYear}</h3>}
                    <span className={`timelineIcon ${currentStory.category}`} style={{background: generateIconCssColors(currentStory.themes)}}/>
                </span>
            })}
        </div>
        <div id="timelineHighlight"/>
    </div>
})
export {Timeline}