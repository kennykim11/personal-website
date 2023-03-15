import {CardNav} from "./CardNav"
import {CardArea} from "./CardArea"
import {useStorage} from "./Storage"
import {observer} from "mobx-react-lite"

const MainView = observer(() => {
    const storage = useStorage()
    return <div id="main">
        <CardNav/>
        {console.log(storage.displayedStories)}
        <CardArea storyIds={storage.storyIds}/>
    </div>
})

export default MainView;