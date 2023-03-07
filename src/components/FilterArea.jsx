import {Filter} from './Filter.jsx'

export function FilterArea() {
    return <div id="filterArea">
        <div id="searchbarArea">
            <input id="searchbar" type="text" placeholder="Search.."/>
        </div>
        <span className="filterSpan">
            <Filter name="explo" text="Exploration"/>
            <Filter name="collab" text="Collaboration"/>
            <Filter name="prob" text="Problem\nSolving"/>
        </span>
        <span className="filterSpan">
            <Filter name="advent" text="Adventure"/>
            <Filter name="work" text="Work\nExperience"/>
            <Filter name="project" text="Project"/>
        </span>
    </div>
}