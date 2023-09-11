import Header from './components/header'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import Projects from './pages/projects'
import Skills from './pages/skills'
import { useRef, useEffect, useState } from 'react'

export default function App() {
    const section1 = useRef()
    const section2 = useRef()
    const section3 = useRef()
    const section4 = useRef()
    const section5 = useRef()


    function scrollTo(section) {
        section.current.scrollIntoView({behavior:
        "smooth"})
    }


    return(
        <div  className='font-work-sans lg:scrollbar scroll-smooth'>
            <Header scrollTo={scrollTo} refer={section1}/>
            <div ref={section1}>
                <Home scrollTo={scrollTo} refer={section2}/>
            </div>
            <div ref={section2}>
                <About scrollTo={scrollTo} refer={section3}/>
            </div>
            <div ref={section3}>
                <Skills scrollTo={scrollTo} refer={section4}/>
            </div>
            <div ref={section4}>
                <Projects scrollTo={scrollTo} refer={section5}/>
            </div>
            <div ref={section5}>
                <Contact scrollTo={scrollTo}/>
            </div>
        </div>
    )
}