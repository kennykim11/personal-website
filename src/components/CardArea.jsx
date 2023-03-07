import stories from '../stories.json'

import {Card} from './Card.jsx'

export function CardArea() {
    return <div id="cardArea">
        {Object.keys(stories).map((id) => {
            //Start debug
            if (stories[id].descript == "") stories[id].descript = stories[id].title + " description"
            if (stories[id].themes.length == 0) stories[id].themes = ["explo", "collab", "prob"]
            //End debug
            stories[id].id = id;
            return <Card story={stories[id]} key={id}/>
        })}
    </div>
}