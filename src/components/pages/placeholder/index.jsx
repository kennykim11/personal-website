import { Card } from "../../Card"
import {IconButton} from "../../IconButton"
import {Link} from "react-router-dom"
import {faSquareXmark} from '@fortawesome/free-solid-svg-icons'

export default function (props) {
    return <div id="storyContents">    
        <div id="storyCardHolder">
            <Card story={props.story}/>
        </div>

        <p>Well the years start coming, and they don't stop coming. Fed to the rules and I hit the ground running. Didn't make sense, not to live for fun. Your brain gets smart but your head gets dumb. So much to do, so much to see, so what's wrong with taking the back streets. You'll never know if you don't go. You'll never shine if you don't glow.</p>

        <p>Hey now, you're an all star, get your game on, go play. Hey now, you're a rockstar, get the show on, get paid. And all that glitters is gold. Only shooting stars break the mold.</p>

        <p>It's a cool place, and they say it gets colder. You're bundled up now, wait 'til you get older. But the meteor man beg to differ. Judging by the hole in the satellite picture.</p>

        <p>The ice we skate is getting pretty thin. The water's getting warm so you might as well swim. My world's on fire. How about yours? That's the way I like it and I'll never get bored.</p>

    </div>
}