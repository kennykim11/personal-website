import {useState} from "react"

export function Filter(props) {
    const [active, setActive] = useState(true)
    
    function handleClick() {
        setActive(props.clickHandler(props.filterId))
    }

    const shape = "shape" in props ? props.shape : "pill"

    return <span id={props.filterId} className="filter"  onClick={handleClick}>
        <div className="filterWrapper">
            <div className={["filterIcon", props.filterId, shape, active?"active":"hidden"].join(" ")}/>
        </div>
        <div className="filterText">
            {props.text.split("\\n").map((str, i) => {
                return <h4 key={str}>{str}</h4>
            })}
        </div>
    </span>
}