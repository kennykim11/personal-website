import {Nav} from "./Nav"
import {StoriesMenu} from "./StoriesMenu"
import {Testimonials} from "./Testimonials"
import {Story} from "./Story"
import {storage, StorageContext} from "./Storage"

import {useEffect} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import 'ionicons';

import './styles.scss'

export function App() {
    useEffect(() => {
        window.sessionStorage.setItem("firstTime", "true");
    }, [])

    return <StorageContext.Provider value={storage}>
        <BrowserRouter>
            <div id="frame">
                {(window.sessionStorage.getItem("firstTime")==null) && <span/>}
                {console.log(window.sessionStorage.getItem("firstTime"))}

                <Nav/>
                <div id="vdivider"/>
                    <Routes>

                        {/* <Route path="/" element={<Navigate to="/stories"/>}/> */}

                        <Route path="/" element={<StoriesMenu title="Kenny Kim's Personal Website"/>}/>

                        {Object.keys(storage.stories).map((id) => {
                            return <Route path={"/story/"+id} key={id} element={
                                <Story id={id} title={"Kenny Kim - "+storage.stories[id].title}/>
                            }/>
                        })}

                        <Route path="/testimonials" element={<Testimonials  title="Kenny Kim - Testimonials"/>}/>

                    </Routes>
            </div>
        </BrowserRouter>
    </StorageContext.Provider>
}