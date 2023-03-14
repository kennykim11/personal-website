
import {Card} from './Card.jsx'

export function CardArea(props) {
    return <div id="cardArea">
        {console.log(props.storyIds)}
        {props.storyIds.map((id) => {
            return <Card storyId={id} key={id}/>
        })}
    </div>
}