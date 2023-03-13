export function DetailView(props) {
    return <div id="detailView">
        {/* <div id="detailBuffer"/> */}
        <div id="detailArea">
            {props.story.title}
        </div>
    </div>
}