import {Nav} from "./Nav"
import {CardNav} from "./CardNav"
import {CardArea} from "./CardArea"
import {Suspense, lazy} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Link} from "react-router-dom"

import './styles.scss'

import stories from '../stories.js'

let debugMode = '';

function cleanStories(stories) {
    for (var id in stories) {
        stories[id].id = id;
        if (stories[id].descript == "") stories[id].descript = stories[id].title + " description"
        if (stories[id].themes.length == 0) stories[id].themes = ["explo", "collab", "prob"]
    }
    return stories
}

export function App() {
    stories = cleanStories(stories)
    // routerPaths = Object.keys(stories).map((id) => {
    //     return {
    //         path: "/"+id,
    //         loader: stories[id].page,
    //         elementl
    //     }
    // }
    // const router = createBrowserRouter

    return <BrowserRouter>
        <div id="frame">
            <Nav/>
            <div id="vdivider"/>
            <Suspense fallback={<div id="loadingScreen">Loading...</div>}>
                <Routes>
                    <Route path="/" element={
                        <div>
                            <div id="main">
                                <CardNav/>
                                <CardArea stories={stories}/>
                            </div>
                            <div id="summaryView">
                                <Link to="/stories">
                                    <div className="closeButton"/>
                                </Link>
                            </div>
                        </div>
                    }/>
                    <Route path="/stories" element={
                        <div id="main">
                            <CardNav/>
                            <CardArea stories={stories}/>
                        </div>
                    }/>
                    {Object.keys(stories).map((id) => {
                        const PageComponent = lazy(stories[id].page)
                        return <Route path={"/story/"+id} key={id} element={
                                <div id="detail">
                                    <PageComponent story={stories[id]}/>
                                </div>
                            }/>
                    })}
                </Routes>
            </Suspense>
        </div>
    </BrowserRouter>
}