
import {Card} from './Card'
import {StorageContext} from "./Storage"

import {useContext, useRef, useEffect} from 'react'
import {observer} from 'mobx-react-lite'


const CardArea = observer(() => {
    const storage = useContext(StorageContext)
    const cardAreaRef = useRef(null)

    function handleScroll() {
        let el = cardAreaRef.current
        storage.setCardAreaScroll({
            scrollTop: el.scrollTop,
            scrollHeight: el.scrollHeight,
            clientHeight: el.clientHeight
        })
    }
    
    useEffect(() => {
        cardAreaRef.current.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleScroll)
        handleScroll()
        return () => {
            window.removeEventListener('resize', handleScroll)
        }
    }, [])

    return <div id="cardArea" ref={cardAreaRef}>
        <div id="cardAreaContents">
            {storage.displayedStories.map((id) => {
                return <Card story={storage.stories[id]} key={id}/>
            })}
        </div>
    </div>
})

export {CardArea}