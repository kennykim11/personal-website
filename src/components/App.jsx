import {Nav} from "./Nav"
import {Timeline} from "./Timeline"
import {CardArea} from "./CardArea"
import './styles.scss'

export function App() {
    return (<div id="frame">
        <div id="main">
            <Nav/>
            <div id="vdivider"/>
            <Timeline/>
            <CardArea/>
        </div>
    </div>)
}