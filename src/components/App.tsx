import {Nav} from "./Nav"
import {StoriesMenu} from "./StoriesMenu"
import {Testimonials} from "./Testimonials"

import {Suspense, lazy} from "react"
import {BrowserRouter, Routes, Route, redirect, Navigate, useSearchParams} from "react-router-dom"
import {storage, StorageContext} from "./Storage"
import 'ionicons';

import './styles.scss'
import { Story } from "./Story"

let debugMode = '';

export function App() {
    return <StorageContext.Provider value={storage}>
        <BrowserRouter>
            <div id="frame">
                <Nav/>
                <div id="vdivider"/>
                    <Routes>

                        {/* <Route path="/" element={<Navigate to="/stories"/>}/> */}

                        <Route path="/" element={<StoriesMenu/>}/>

                        {Object.keys(storage.stories).map((id) => {
                            return <Route path={"/story/"+id} key={id} element={
                                <Story id={id}/>
                            }/>
                        })}

                        <Route path="/testimonials" element={<Testimonials/>}/>

                    </Routes>
            </div>
        </BrowserRouter>
    </StorageContext.Provider>
}