import {Nav} from "./Nav"
import {CardNav} from "./CardNav"
import {CardArea} from "./CardArea"
import {DetailView} from "./DetailView"
import {Suspense, lazy} from "react"
import {BrowserRouter, Routes, Route, createBrowserRouter} from "react-router-dom"

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

    if (debugMode=='detail') {
        return <div id="frame">
            <DetailView/>
        </div>
    }

    return <BrowserRouter>
        <div id="frame">
            <Nav/>
            <div id="vdivider"/>
            <Suspense fallback={<div id="loadingScreen">Loading...</div>}>
                <Routes>
                    <Route path="/" element={
                        <div id="main">
                            <CardNav/>
                            <CardArea stories={stories}/>
                        </div>
                    }/>
                    {Object.keys(stories).map((id) => {
                        const PageComponent = lazy(stories[id].page)
                        return <Route path={"/"+id} key={id} element={
                                <div id="detail">
                                    <PageComponent/>
                                </div>
                            }/>
                    })}
                </Routes>
            </Suspense>
        </div>
    </BrowserRouter>
}