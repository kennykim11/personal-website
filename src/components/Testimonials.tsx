import StackGrid from "react-stack-grid"
import {useEffect} from "react"

import testimonies from "../testimonials.json"

const slogans = [
    <h1>"4 out of 5 dentists recommend <b>Kenny Kim</b>!"</h1>,
    <h1>"<b>Kenny Kim</b> is the preferred choice by leading engineering corporations!"</h1>,
    <h1>"I can't believe it's not <b>Kenny Kim</b>!"</h1>,
    <h1>"Join the countless customers who have seen results in just 12 weeks of using <b>Kenny Kim</b>!"</h1>,
    <h1>"<b>Kenny Kim</b>: As seen on TV!"</h1>
]

const columnWidth = 350

interface ITestimonials_props {
    title: string
}

export function Testimonials(props: ITestimonials_props) {
    useEffect(() => {
        document.title = props.title
    }, [])

    return <div id="testiArea">
        <div id="slogan">
            {slogans[Math.floor(Math.random() * slogans.length)]}
        </div>
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