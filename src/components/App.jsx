import {Nav} from "./Nav"
import {CardNav} from "./CardNav"
import {CardArea} from "./CardArea"
import './styles.scss'

export function App() {
    return (<div id="frame">
        <Nav/>
        <div id="main">
            <div id="vdivider"/>
            <div id="detail">
                <CardNav/>
                <CardArea/>
            </div>
        </div>
    </div>)
}