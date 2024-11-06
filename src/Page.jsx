import React from 'react'
import Skills from './components/Skills'
import Header from './components/Header'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'

function Page() {
    return (
        <div className='w-full h-screen'>
            <Header />
            <Skills />
            <Profile />
            <Projects />
            <Footer />
        </div>
    )
}

export default Page