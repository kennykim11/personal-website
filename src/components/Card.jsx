import {Link} from "react-router-dom"

import HeadshotImage from '../assets/thumbnails/=thumbnail_placeholder.png'

export function Card(props) {
    let imageSource = "../assets/thumbnails/"+props.story.id+".png"
    return <Link to={'/story/'+props.story.id}>
        <div className="card">
            <div className="cardThemeBar">
                {props.story.themes.map((theme) => {
                    return <div className={"cardThemeBlock " + theme} key={theme}/>
                })}
            </div>
            <img className="thumbnail" src={imageSource} onError={(e)=>{e.target.onError = null; e.target.src = HeadshotImage}}/>
            <div className="cardTextArea">
                <h2 className="cardTitle">{props.story.title}</h2>
                <h3 className="cardDescript">{props.story.descript}</h3>
            </div>
        </div>
    </Link>
}