
import {Card} from './Card.jsx'

export function CardArea(props) {
    return <div id="cardArea">
        {Object.keys(props.stories).map((id) => {
            console.log(id)
            return <Card story={props.stories[id]} key={id}/>
        })}
    </div>
}