import {NavLink, Link} from "react-router-dom"

import {StorageContext} from "./Storage"
import {useContext} from "react"
import HeadshotImage from '../assets/Suit_Edited_cropped_scaled.png'

export function Nav() {
    const storage = useContext(StorageContext)
    return <div id="nav">
        <Link to="/">
            <div id="homeArea">
                <div id="headshotArea">
                    <img src={HeadshotImage} id="headshotImage"></img>
                </div>
                <h2 id="name">KENNY KIM</h2>
            </div>
        </Link>
        <div id="navLinkArea">
            <NavLink to='/'><h2 className="navLink">STORIES</h2></NavLink>
            <Link to='/'><h2 className="navLink" onClick={()=>{storage.summaryMode=true}}>SUMMARY</h2></Link>
            <Link to='/testimonials'><h2 className="navLink">TESTIMONIALS</h2></Link>
            <h2 className="navLink" id="navLink_tools">TOOLS</h2>
            <NavLink to="/story/contact"><h2 className="navLink">CONTACT</h2></NavLink>
        </div>
    </div>
}