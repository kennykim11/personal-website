
import {Card} from './Card'
import {StorageContext} from "./Storage"

import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite'

const CardArea = observer(() => {
    const storage = useContext(StorageContext);
    return <div id="cardArea">
        <div id="cardAreaContents">
            {storage.displayedStories.map((id) => {
                return <Card story={storage.stories[id]} key={id}/>
            })}
        </div>
    </div>
})

export {CardArea}