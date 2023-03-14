import {Filter} from './Filter.jsx'

import {Storage} from './Storage.jsx'

var searchTerm = ''
function search() {
    Object.keys(Storage.stories).map((id) => {})
}

function SearchBar() {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            searchTerm = event.target.value
            search()
        }
    }
    return <input id="searchbar" type="text" placeholder="Search.." onKeyDown={handleKeyDown}/>
}

export function FilterArea() {
    return <div id="filterArea">
        <div id="searchbarArea">
            <SearchBar/>
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