import { action, makeObservable, observable } from "mobx";
import {createContext, useContext} from "react";

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
    setDisplayedStories(storiesArray) {return this.displayedStories = storiesArray}
    resetDisplayedStories() {
        // return this.displayedStories = this.storiesFullIdList
        return this.displayedStories = [
            "doorman", "sois", "hitchhiking", "friendzone", "moog", "htl", "nasa", "microsoft", "businessCard", "ti", "makerClass", "industrialDesign", "gradParty", "personalWebsite", "contact"
        ]
    }

    currentPage = 0
    setCurrentPage(page) {return this.currentPage = page}

    cardAreaScroll = {scrollTop: 0, scrollHeight: 0, clientHeight: 0}
    setCardAreaScroll(scrollObject) {return this.cardAreaScroll = scrollObject}

    highlightedCard = ""
    setHighlightedCard(cardId: string) {return this.highlightedCard = cardId}

    constructor() {
        makeObservable(this, {
            displayedStories: observable,
            setDisplayedStories: action,
            resetDisplayedStories: action,
            currentPage: observable,
            setCurrentPage: action,
            cardAreaScroll: observable,
            setCardAreaScroll: action,
            highlightedCard: observable,
            setHighlightedCard: action
        })
        this.stories = cleanStories(stories)
        this.storiesFullIdList = Object.keys(this.stories)
        this.setDisplayedStories(this.storiesFullIdList)
    }
}

export const storage = new Storage()
export const StorageContext = createContext(storage)

export const StorageProvider = ({children, storage}) => {
    return <StorageContext.Provider value={storage}>{children}</StorageContext.Provider>
}

export const useStorage = () => useContext(StorageContext);

export const withStorage = (Component) => (props) => {
    return <Component {...props} store={useStorage()} />
}