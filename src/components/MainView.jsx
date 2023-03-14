import {CardNav} from "./CardNav"
import {CardArea} from "./CardArea"
import {Storage, useStorage} from "./Storage"
import {observer, Observer} from "mobx-react-lite"

const MainView = observer(() => {
    const storage = useStorage()
    return <div id="main">
        <CardNav/>
        {console.log(storage.displayedStories)}
        <CardArea storyIds={storage.storyIds}/>
    </div>
})

export default MainView;