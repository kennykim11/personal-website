import HeadshotImage from '../assets/Suit_Edited_cropped_scaled.png'

export function Nav() {
    return <div id="nav">
        <div id="headshotArea">
            <img src={HeadshotImage} id="headshotImage"></img>
        </div>
        <h2 id="name">KENNY KIM</h2>
    </div>
}