export function Card(props) {
    return <div className="card">
        <div className="themeBar"/>
        <img className="thumbnail" src={"../assets/thumbnails/"+props.story.id+".png"}/>
        <div className="cardTextArea">
            <h2 className="cardTitle">{props.story.title}</h2>
            <h3 className="cardDescript">{props.story.descript}</h3>
        </div>
    </div>
}