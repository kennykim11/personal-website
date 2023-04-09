import {Link} from 'react-router-dom'
import IntroImage from '../assets/intro.png'
import {IconButton} from "./IconButton"
import {StorageContext} from "./Storage"

import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
import {useContext} from "react"

interface ILandingPage_props {
    setLandingPageHandler: (show: boolean)=>void
}

export function LandingPage(props: ILandingPage_props) {
    const storage = useContext(StorageContext)

    return <div id="landingPage">
        <div id="landingArea">
            <img src={IntroImage} id="introImage"/>
            <div id="landingInterface">
                <div id="landingText">
                    <h1>Hi, I'm Kenny Kim!</h1>
                    <div id="themeList">
                        <span className="explo">EXPLORER</span>
                        <span> | </span>
                        <span className="collab">COLLABORATOR</span>
                        <span> | </span>
                        <span className="prob">PROBLEM SOLVER</span>
                    </div>
                </div>
                <div id="landingOptions">
                    <Link to='/'>
                        <div id="landingIntroOption">
                            <h3 onClick={()=>{
                                storage.summaryMode=true
                                props.setLandingPageHandler(false)
                                }}>Introduction</h3>
                            <IconButton onClick={()=>{props.setLandingPageHandler(false)}} icon={faCaretRight} keyListener="Space"/>
                        </div>
                    </Link>
                    <Link to="/">
                        <div id="landingMainOption">Skip to Main Page</div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
}