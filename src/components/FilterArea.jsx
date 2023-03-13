import {Filter} from './Filter.jsx'

export function FilterArea() {
    return <div id="filterArea">
        <div id="searchbarArea">
            <input id="searchbar" type="text" placeholder="Search.."/>
        </div>
        <div className="filterGap"/>
        <span className="filterSpan">
            <Filter name="explo" text="Exploration" theme="explo"/>
            <Filter name="collab" text="Collaboration" theme="collab"/>
            <Filter name="prob" text="Problem\nSolving" theme="prob"/>
        </span>
        <div className="filterGap"/>
        <span className="filterSpan">
            <Filter name="work" text="Work\nExperience" shape="triangle"/>
            <Filter name="adventure" text="Adventure" shape="square"/>
            <Filter name="project" text="Project" shape="circle"/>
        </span>
    </div>
}