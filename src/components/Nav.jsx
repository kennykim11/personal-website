import HeadshotImage from '../assets/Suit_Edited_cropped_scaled.png'

export function Nav() {
    return <div id="nav">
        <div id="homeArea">
            <div id="headshotArea">
                <img src={HeadshotImage} id="headshotImage"></img>
            </div>
            <h2 id="name">KENNY KIM</h2>
        </div>
        <div id="navLinkArea">
            <h2 class="navLink" id="navLink_stories">STORIES</h2>
            <h2 class="navLink" id="navLink_summary">SUMMARY</h2>
            <h2 class="navLink" id="navLink_testim">TESTIMONIALS</h2>
            <h2 class="navLink" id="navLink_tools">TOOLS</h2>
            <h2 class="navLink" id="navLink_contact">CONTACT</h2>
        </div>
    </div>
}