
import {Card} from './Card.jsx'
import {StorageContext} from "./Storage"

import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite'

const CardArea = observer(() => {
    const storage = useContext(StorageContext);
    return <div id="cardArea">
        {storage.displayedStories.map((id) => {
            return <Card story={storage.stories[id]} key={id}/>
        })}
    </div>
})

export {CardArea}