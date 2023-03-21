import { action, makeObservable, observable } from "mobx";
import React from "react";

import stories from '../stories.js'

function cleanStories(stories) {
    for (var id in stories) {
        stories[id].id = id;
        if (stories[id].descript == "") stories[id].descript = stories[id].title + " description"
        if (stories[id].themes.length == 0) stories[id].themes = ["explo", "collab", "prob"]
    }
    return stories
}

export class Storage {
    stories = {}
    storiesFullIdList = []

    summaryMode = false

    displayedStories = []
    setDisplayedStories(storiesArray) {
        this.displayedStories = storiesArray
        return this.displayedStories
    }
    resetDisplayedStories() {
        this.displayedStories = this.storiesFullIdList
        return this.displayedStories
    }

    currentPage = 0
    setCurrentPage(page) {
        this.currentPage = page
        return this.currentPage
    }

    constructor() {
        makeObservable(this, {
            displayedStories: observable,
            setDisplayedStories: action,
            resetDisplayedStories: action,
            currentPage: observable,
            setCurrentPage: action
        })
        this.stories = cleanStories(stories)
        this.storiesFullIdList = Object.keys(this.stories)
        this.setDisplayedStories(this.storiesFullIdList)
    }
}

export const storage = new Storage()
export const StorageContext = React.createContext(storage)

export const StorageProvider = ({children, storage}) => {
    return <StorageContext.Provider value={storage}>{children}</StorageContext.Provider>
}

export const useStorage = () => React.useContext(StorageContext);

export const withStorage = (Component) => (props) => {
    return <Component {...props} store={useStorage()} />;
  };