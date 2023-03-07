import stories from '../stories.json'

import {Card} from './Card.jsx'

export function CardArea() {
    return <div id="cardArea">
        {Object.keys(stories).map((id) => {
            <Card story={stories[id]} key={id}/>
            {console.log(id)}
        })}
    </div>
}