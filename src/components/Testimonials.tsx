import StackGrid from "react-stack-grid"
import {useEffect} from "react"

import testimonies from "../testimonials.json"

const columnWidth = 350

interface ITestimonials_props {
    title: string
}

export function Testimonials(props: ITestimonials_props) {
    useEffect(() => {
        document.title = props.title
    }, [])

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