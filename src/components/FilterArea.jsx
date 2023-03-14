import {Filter} from './Filter.jsx'
import {StorageContext} from "./Storage"

import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'

let searchTerm = ''
let allStories = {}
let storage = {}
let selectedThemes = {'explo': true, 'collab': true, 'prob': true}
let selectedCategories = {'work': true, 'adventure': true, 'project': true}

function filterStories() {
    let filteredStoryIds = Object.keys(allStories).filter(id => {
        return allStories[id].title.toLowerCase().includes(searchTerm) || allStories[id].descript.toLowerCase().includes(searchTerm)      
    })
    filteredStoryIds = filteredStoryIds.filter(id => {
        return allStories[id].themes.filter(theme => selectedThemes[theme]).length
    })
    filteredStoryIds = filteredStoryIds.filter(id => {
        return selectedCategories[allStories[id].category]
    })
    storage.setDisplayedStories(filteredStoryIds)
}

function toggleTheme(theme) {
    selectedThemes[theme] = !selectedThemes[theme]
    filterStories()
    return selectedThemes[theme]
}

function toggleCategory(cat) {
    selectedCategories[cat] = !selectedCategories[cat]
    filterStories()
    return selectedCategories[cat]
}

function Searchbar() {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            searchTerm = event.target.value.toLowerCase()
            filterStories()
        }
    }
    return <input id="searchbar" type="text" placeholder="Search.." onKeyDown={handleKeyDown}/>
}

const FilterArea = observer(() => {
    storage = useContext(StorageContext)
    allStories = storage.stories

    return <div id="filterArea">
        <div id="searchbarArea">
            <Searchbar/>
        </div>
        <div className="filterGap"/>
        <span className="filterSpan">
            <Filter filterId="explo" text="Exploration" clickHandler={toggleTheme}/>
            <Filter filterId="collab" text="Collaboration" clickHandler={toggleTheme}/>
            <Filter filterId="prob" text="Problem\nSolving" clickHandler={toggleTheme}/>
        </span>
        <div className="filterGap"/>
        <span className="filterSpan">
            <Filter filterId="work" text="Work\nExperience" shape="triangle" clickHandler={toggleCategory}/>
            <Filter filterId="adventure" text="Adventure" shape="square" clickHandler={toggleCategory}/>
            <Filter filterId="project" text="Project" shape="circle" clickHandler={toggleCategory}/>
        </span>
    </div>
})

export {FilterArea}