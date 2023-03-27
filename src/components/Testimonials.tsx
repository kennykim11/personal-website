import {NavLink, Link} from "react-router-dom"
import StackGrid from "react-stack-grid"

import {StorageContext} from "./Storage"
import {useContext, useEffect, useRef} from "react"
import HeadshotImage from '../assets/Suit_Edited_cropped_scaled.png'
import testimonies from "../testimonials.json"

const columnWidth = 350

export function Testimonials() {
    // const testiAreaRef = useRef(null)

    // function resizeHandler() {
    //     console.log(testiAreaRef.current.offsetWidth)
    // }

    // useEffect(() => {
    //     window.addEventListener("resize", resizeHandler)
    //     resizeHandler()
    //     return () => {
    //         window.removeEventListener("resize", resizeHandler)
    //     }
    // }, [])


    const storage = useContext(StorageContext)
    return <div id="testiArea">
        <StackGrid columnWidth={columnWidth} gutterWidth={20} gutterHeight={-20}>
            {testimonies.map((testi) => {
                return <div className="testiCard" key={testi.author}>
                    <h2 className="testiCardQuote">{testi.quote}</h2>
                    <h2 className="testiCardAuthor">{"-"+testi.author}</h2>
                </div>
            })}
        </StackGrid>
    </div>
}