import './main.css'
import { useState } from 'react'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Main = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [openIndex, setOpenIndex] = useState(true)

    const handleIndex = async () => {
        await setOpenIndex(!openIndex)
    }
    return (
        <>
            <div className="container">
                {currentPage === 1 && (
                    <>
                        <div className="left">
                            <div className="left-content first-image">
                                <span className="left-logo">
                                    <span></span>
                                    <h1 className="left-logo-content">
                                        <span>Lefju</span>
                                        <span>Personal</span>
                                        <span>Site</span>
                                    </h1>
                                </span>
                                <div className="left-bottom">
                                    <div>
                                        <p>About me</p>
                                        <p className="left-bottom-text">
                                            <span>Muhammad Ali</span>
                                            <span> - </span>
                                            <span>
                                                “Don't count the days, make the days count.”
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {currentPage === 2 && (
                    <>
                        <div className="left">
                            <div className="left-content second-image">
                                <span className="left-logo">
                                    <span></span>
                                    <h1 className="left-logo-content">
                                        <span>Lefju</span>
                                        <span>Personal</span>
                                        <span>Site</span>
                                    </h1>
                                </span>
                                <div className="left-bottom">
                                    <div>
                                        <p>Projects</p>
                                        <p className="left-bottom-text">
                                            <span>Albert Einstein</span>
                                            <span> - </span>
                                            <span>
                                                ”There are only two ways to live your life. One is
                                                as though nothing is a miracle. The other is as
                                                though everything is a miracle.”
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {currentPage === 3 && (
                    <>
                        <div className="left">
                            <div className="left-content third-image">
                                <span className="left-logo">
                                    <span></span>
                                    <h1 className="left-logo-content">
                                        <span>Lefju</span>
                                        <span>Personal</span>
                                        <span>Site</span>
                                    </h1>
                                </span>
                                <div className="left-bottom">
                                    <div>
                                        <p>Contact</p>
                                        <p className="left-bottom-text">
                                            <span>Marcus Aurelius</span>
                                            <span> - </span>
                                            <span>”Our life is what our thoughts make it.”</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className="right">
                    <div className="right-background">
                        <div className="right-content">
                            {currentPage === 1 && <Profile handleIndex={handleIndex} />}
                            {currentPage === 2 && <Projects handleIndex={handleIndex} />}
                            {currentPage === 3 && <Contact handleIndex={handleIndex} />}
                        </div>
                    </div>
                </div>

                <div className="index">
                    <div className={`${openIndex === true ? 'index-closed' : 'index-opened'} `}>
                        <div
                            className="index-crimson"
                            onClick={() => {
                                console.log(openIndex)
                                setOpenIndex(!openIndex)
                            }}>
                            <span className="index-category" aria-hidden="true">
                                <p className="index-name">menu</p>
                            </span>
                            <div className="sidebar">
                                <div className="sidebar-content">
                                    <div className="sidebar-container">
                                        <span
                                            onClick={() => {
                                                setCurrentPage(1)
                                                console.log(currentPage)
                                            }}
                                            className="sidebar-element">
                                            <p>About me</p>
                                        </span>
                                        <span
                                            onClick={() => {
                                                setCurrentPage(2)
                                                console.log(currentPage)
                                            }}
                                            className="sidebar-element">
                                            <p>Projects</p>
                                        </span>
                                        <span
                                            onClick={() => {
                                                setCurrentPage(3)
                                                console.log(currentPage)
                                            }}
                                            className="sidebar-element">
                                            <p>Contact</p>
                                        </span>
                                    </div>

                                    <footer>
                                        <p>© 2023 by Lefju™</p>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main
