import {Nav} from "./Nav"
import {Main} from "./Main"
import {Summary} from "./Summary"

import {Suspense, lazy} from "react"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import {storage, StorageContext} from "./Storage"

import './styles.scss'

let debugMode = '';

export function App() {
    return <StorageContext.Provider value={storage}>
        <BrowserRouter>
            <div id="frame">
                <Nav/>
                <div id="vdivider"/>
                <Suspense fallback={<div id="loadingScreen">Loading...</div>}>
                    <Routes>

                        <Route path="/" element={
                            <div style={{width: "100%"}}>
                                <Main/>
                                <Summary/>
                            </div>
                        }/>

                        <Route path="/stories" element={<Main/>}/>

                        {Object.keys(storage.stories).map((id) => {
                            const PageComponent = lazy(storage.stories[id].page)
                            return <Route path={"/story/"+id} key={id} element={
                                    <div id="detail">
                                        <PageComponent story={storage.stories[id]}/>
                                    </div>
                                }/>
                        })}

                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    </StorageContext.Provider>
}