export function Filter(props) {
    return <span id={props.name} className="filter">
        <div className="filterWrapper">
            <div className={"filterIcon " + props.theme + ' ' + props.shape}/>
        </div>
        <div className="filterText">
            {props.text.split("\\n").map((str, i) => {
                return <h4 key={str}>{str}</h4>
            })}
        </div>
    </span>
}