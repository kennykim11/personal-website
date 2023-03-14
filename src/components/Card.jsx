import {Link} from "react-router-dom"
import {Storage} from "./Storage"

import ThumbnailPlaceholder from '../assets/thumbnails/=thumbnail_placeholder.png'

export function Card(props) {
    let story = Storage.stories[storyId]
    let imageSource = story.thumbnail
    return <Link to={'/story/'+story.id}>
        <div className="card">
            <div className="cardThemeBar">
                {story.themes.map((theme) => {
                    return <div className={"cardThemeBlock " + theme} key={theme}/>
                })}
            </div>
            <img className="thumbnail" src={imageSource} onError={(e)=>{e.target.onError = null; e.target.src = ThumbnailPlaceholder}}/>
            <div className="cardTextArea">
                <h2 className="cardTitle">{story.title}</h2>
                <h3 className="cardDescript">{story.descript}</h3>
            </div>
        </div>
    </Link>
}