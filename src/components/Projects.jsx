import Audi from '../images/audi.jpg'

const Projects = ({ handleIndex }) => {
    return (
        <>
            <div className="element">
                <span className="element-title" aria-hidden="true" onClick={() => handleIndex()}>
                    <span className="element-icon">&nbsp;</span>

                    <p className="element-bar">projects</p>
                </span>

                <section>
                    <div className="element-content">
                        <h1>
                            <a
                                href="https://github.com/Lefjuu/messenger-backend"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="element-component-title">
                                Realtime Chat App
                            </a>
                            <span className="element-badge">Free</span>
                        </h1>
                        <p>
                            <span className="footer-title">Unlicense</span>
                            <span className="element-pause">-</span>
                            <span>
                                It's a open source web-based instant messaging app designed as
                                closely as possible to Messenger, Telegram or other similar
                            </span>
                        </p>
                        <img src={Audi} alt="audi" />
                    </div>
                    <div className="element-content">
                        <h1>
                            <a
                                href="https://github.com/Lefjuu/dogestagram"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="element-component-title">
                                Social Media App
                            </a>
                            <span className="element-badge">Free</span>
                        </h1>
                        <p>
                            <span className="footer-title">Unlicense</span>
                            <span className="element-pause">-</span>
                            <span>
                                App with features and looks like Instagram, more info on github in
                                readme.md
                            </span>
                        </p>
                        <img src={Audi} alt="audi" />
                    </div>
                </section>
            </div>
        </>
    )
}
export default Projects
