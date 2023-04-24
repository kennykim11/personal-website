import {NavLink, Link} from "react-router-dom"
import {useContext} from "react"

import {StorageContext} from "./Storage"
import HeadshotImage from '../assets/Suit_Edited_cropped_scaled.png'

export function Nav() {
    const storage = useContext(StorageContext)
    return <div id="nav">
        <Link to="/" onClick={()=>{window.sessionStorage.setItem("firstTime", null)}}>
            <div id="homeArea">
                <div id="headshotArea">
                    <img src={HeadshotImage} id="headshotImage"></img>
                </div>
                <h2 id="name">KENNY KIM</h2>
            </div>
        </Link>
        <div id="navLinkArea">
            <NavLink to='/'><h3 className="navLink">ADVENTURES</h3></NavLink>
            <Link to='/'><h3 className="navLink" onClick={()=>{storage.summaryMode=true}}>INTRODUCTION</h3></Link>
            <Link to='/testimonials'><h3 className="navLink">TESTIMONIALS</h3></Link>
            {/* <h3 className="navLink" id="navLink_tools">TOOLS</h3> */}
            <NavLink to="/story/contact"><h3 className="navLink">CONTACT</h3></NavLink>
        </div>
    </div>
}