import {Nav} from "./Nav"
import {Suspense, lazy, useEffect} from "react"
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import {Link} from "react-router-dom"
import {MainView} from "./MainView"
import {Storage, StorageProvider} from "./Storage"

import './styles.scss'

let debugMode = '';
storage = new Storage()

function Frame() {

    const location = useLocation();
    useEffect(() => {
        storage.setCurrentPage(location.pathname)
    }, [location])

    return <StorageProvider storeage={storage}>
        <div id="frame">
            <Nav/>
            <div id="vdivider"/>
            <Suspense fallback={<div id="loadingScreen">Loading...</div>}>
                <Routes>
                    <Route path="/" element={
                        <div>
                            <MainView/>
                            <div id="summaryView">
                                <Link to="/stories">
                                    <div className="closeButton"/>
                                </Link>
                            </div>
                        </div>
                    }/>
                    //TODO Look into Dynamic Routing (https://blog.webdevsimplified.com/2022-07/react-router/#dynamic-routing)
                    <Route path="/stories" element={<MainView/>}/>
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
    </StorageProvider>
}

export function App() {

    return <BrowserRouter>
        <Frame/>
    </BrowserRouter>
}