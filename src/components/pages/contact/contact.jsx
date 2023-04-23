import { Card } from "../../Card"
import {IconButton} from "../../IconButton"
import {Link} from "react-router-dom"
import {faSquareXmark} from '@fortawesome/free-solid-svg-icons'

import './contact_styles.scss'

export default function (props) {
    console.log(process.env.REACT_APP_WEBFORMS_APIKEY)
    return <div id="contactPage">
        <div><h1>Hello, nice to meet you!</h1></div>
        <form action="https://api.web3forms.com/submit" method="POST">

        <input type="hidden" name="access_key" value={process.env.REACT_APP_WEBFORMS_APIKEY}/>
        <div><input type="text" placeholder="Name" name="name" required/></div>
        <div><input type="email" placeholder="Email"  name="email" required/></div>
        <div><textarea name="message" placeholder="What are you thinking?"  required></textarea></div>
        {/* <input type="hidden" name="redirect" value="https://web3forms.com/success"/> */}

        <div style={{display: 'inline-block'}}><button type="submit">Send!</button></div>

        </form>
    </div>
}