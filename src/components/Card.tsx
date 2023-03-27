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
            <div className="thumbnailArea">
                <img className="thumbnail" src={imageSource} 
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>)=>{
                        e.currentTarget.onerror = null; e.currentTarget.src = HeadshotImage}
                    }/>
            </div>
            <div className="cardTextArea">
                <h2 className="cardTitle">{props.story.title}</h2>
                <h4 className="cardDescript">{props.story.descript}</h4>
            </div>
        </div>
    </Link>
}