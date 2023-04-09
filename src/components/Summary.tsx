
import {StorageContext} from "./Storage"
import {IconButton} from "./IconButton"

import {useContext, useState, useEffect} from 'react'
import Typist from 'react-typist';
import {observer} from "mobx-react-lite"
import {Link, redirect, useNavigate} from "react-router-dom"
import {faSquareCaretLeft, faSquareCaretRight, faSquareXmark} from '@fortawesome/free-solid-svg-icons'


const summaryInfo = [
    {
        text: "For the last seven years, I've been learning that the best approach to life is to constantly ask, \"What if?\"",
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
    const storage = useContext(StorageContext)
    storage.summaryMode = true
    const navigate = useNavigate()

    function changePage(direction) {
        if (direction === "next") {
            if (storage.currentPage === summaryInfo.length-1) {
                storage.resetDisplayedStories()
                storage.summaryMode = false
                storage.setCurrentPage(0)
                navigate("/")
            }
            else {
                storage.setCurrentPage(storage.currentPage+1)
            }
        }
        if (direction === "prev") {
            if (storage.currentPage === 0) {
                storage.resetDisplayedStories()
                storage.summaryMode = false
                navigate("/")
            }
            else {
                storage.setCurrentPage(storage.currentPage-1)
            }
        }
    }

    useEffect(() => {
        storage.setDisplayedStories(summaryInfo[storage.currentPage].stories)
    }, [storage.currentPage])


    return <div id="summaryView">
        <Link className="closeButton" to="/">
            <IconButton icon={faSquareXmark} clickHandler={()=>{storage.resetDisplayedStories(); storage.setCurrentPage(0); storage.summaryMode = false; redirect("/")}} keyListener="Backspace"/>
        </Link>
        <div id="summaryTextArea">
            <h1 id="summaryText">
                <Typist key={storage.currentPage} avgTypingDelay={40} startDelay={600}
                    cursor={{
                        show: true,
                        blink: false,
                        element: "│",
                        hideWhenDone: false,
                        hideWhenDoneDelay: 200,
                    }} 
                    onTypingDone={()=>{
                        document.getElementsByClassName("Cursor")[0].className = "Cursor--blinking"
                    }}>
                    {summaryInfo[storage.currentPage].text}</Typist>
            </h1>
        </div>
        <div id="summaryButtonArea">
            <IconButton icon={faSquareCaretLeft} clickHandler={()=>{changePage('prev')}} keyListener="ArrowLeft"/>
            <IconButton icon={faSquareCaretRight} clickHandler={()=>{changePage('next')}} keyListener="ArrowRight"/>
        </div>
    </div>
})

export {Summary}