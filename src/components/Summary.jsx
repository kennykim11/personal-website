
import {StorageContext} from "./Storage"
import {IconButton} from "./IconButton"

import React, {useContext, useState, useEffect, useRef} from 'react'
import {observer} from "mobx-react-lite"
import {Link, useNavigate} from "react-router-dom"

const summaryInfo = [
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
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(0)

    function changePage(direction) {
        if (direction == "next") {
            if (currentPage == summaryInfo.length-1) {
                navigate("/stories")
                storage.resetDisplayedStories()
            }
            else {
                setCurrentPage(currentPage+1)
            }
        }
        if (direction == "prev") {
            if (currentPage == 0) {
                navigate("/stories")
                storage.resetDisplayedStories()
            }
            else {
                setCurrentPage(currentPage-1)
            }
        }
    }

    // const leftButton = useRef(null)
    // const rightButton = useRef(null)
    function keyDownHandler(event) {
        console.log(event)
        // if (event.key == "ArrowLeft") leftButton.className += " mute"
    }

    const ref = useRef(null);
    useEffect(() => {
        //ref.current.focus();
    }, []);


    return <div id="summaryView" ref={ref} tabIndex={-1} onKeyDown={keyDownHandler}>
        <Link className="closeButton" to="/stories">
            <IconButton iconName="close" clickHandler={()=>{setCurrentPage(0)}}/>
        </Link>
        <div id="summaryTextArea">
            <h1 id="summaryText">
                {summaryInfo[currentPage].text}
            </h1>
        </div>
        <div id="summaryButtonArea">
            <IconButton iconName="caret-back" clickHandler={()=>{changePage('prev')}}/>
            <IconButton iconName="caret-forward" clickHandler={()=>{changePage('next')}}/>
        </div>
        {(()=>{storage.setDisplayedStories(summaryInfo[currentPage].stories)})()}
    </div>
})

export {Summary}