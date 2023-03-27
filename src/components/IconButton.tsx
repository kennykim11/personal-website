import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {useState, useEffect, useRef} from "react";

export function IconButton(props) {

    const [muted, setMute] = useState(false)
    const clickHandler = useRef(props.clickHandler)
    clickHandler.current = props.clickHandler

    function keyDownHandler(event) {
        if (event.key === props.keyListener) {
            setMute(true)
        }
    }

    function keyUpHandler(event) {
        if (event.key === props.keyListener) {
            setMute(false)
            return clickHandler.current()
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", keyDownHandler)
        window.addEventListener("keyup", keyUpHandler)
        return () => {
            window.removeEventListener("keydown", keyDownHandler)
            window.removeEventListener("keyup", keyUpHandler)
        }
    }, [])

    return <div onClick={props.clickHandler}>
        <FontAwesomeIcon icon={props.icon} className={"solidIcon " + (muted ? "muted" : "")}/>
    </div>
}