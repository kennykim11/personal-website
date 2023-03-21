import {NavLink, Link} from "react-router-dom"

import {StorageContext} from "./Storage"
import {useContext} from "react"
import HeadshotImage from '../assets/Suit_Edited_cropped_scaled.png'

export function Nav() {
    const storage = useContext(StorageContext)
    return <div id="nav">
        <div id="homeArea">
            <div id="headshotArea">
                <img src={HeadshotImage} id="headshotImage"></img>
            </div>
            <h2 id="name">KENNY KIM</h2>
        </div>
        <div id="navLinkArea">
            <NavLink to='/'><h2 className="navLink" id="navLink_stories">STORIES</h2></NavLink>
            <Link to='/?summary'><h2 className="navLink" id="navLink_summary" onClick={()=>{storage.summaryMode=true}}>SUMMARY</h2></Link>
            <h2 className="navLink" id="navLink_testim">TESTIMONIALS</h2>
            <h2 className="navLink" id="navLink_tools">TOOLS</h2>
            <NavLink to="/story/contact"><h2 className="navLink" id="navLink_contact">CONTACT</h2></NavLink>
        </div>
    </div>
}