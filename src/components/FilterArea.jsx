import {Filter} from './Filter.jsx'
import {StorageContext} from "./Storage"

import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'

let searchTerm = ''
let allStories = {}
let storage = {}
let selectedThemes = {'explo': true, 'collab': true, 'prob': true}

function filterStories() {
    let filteredStoryIds = Object.keys(allStories).filter(id => {
        return allStories[id].title.toLowerCase().includes(searchTerm) || allStories[id].descript.toLowerCase().includes(searchTerm)      
    })
    filteredStoryIds = filteredStoryIds.filter(id => {
        return allStories[id].themes.filter(theme => selectedThemes[theme])
    })
    storage.setDisplayedStories(filteredStoryIds)
    console.log(filteredStoryIds)
    console.log(storage)
}

function toggleTheme(theme) {
    selectedThemes[theme] = !selectedThemes[theme]
    filterStories()
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
            <Filter name="explo" text="Exploration" theme="explo" onClick={() => {toggleTheme("explo")}}/>
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
})

export {FilterArea}