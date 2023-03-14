
import {StorageContext} from "./Storage"

import React, {useContext} from 'react'
import {observer} from "mobx-react-lite"
import {Link} from "react-router-dom"

summaryInfo = [
    {
        text: "For the last seven years, I've been a journey of \"What if\".",
        stories: ["seventhDay", "sois", "friendzone"]
    },
    {
        text: "What if I explore the world?",
        stories: ["hitchhiking", "surnameStudies"]
    },
    {
        text: "What if I work in software, electrical, and mechanical engineering?",
        stories: ["microsoft", "ti", "spacex"]
    },
    {
        text: "What if I try to be a force for good?",
        stories: ["sg", "csh", "makerClass"]
    },
    {
        text: "Over time, I realized that no problem is impossible...",
        stories: ["orientation", "nasa", "mit"]
    },
    {
        text: "... and that the most beautiful solutions involve collaborating with awesome people.",
        stories: ["launch", "gradParty", "turkiye"]
    },
    {
        text: "So now I have to ask you...",
        stories: []
    },
    {
        text: "What if we work together to create something amazing?",
        stories: ["contact"]
    },
]

const Summary = observer(() => {
    const storage = useContext(StorageContext);
    return <div id="summaryView">
        <Link to="/stories">
            <div className="closeButton"/>
        </Link>
        <div id="summaryTextArea">
            <h1 id="summaryText">Hello</h1>
        </div>
    </div>
})

export {Summary}