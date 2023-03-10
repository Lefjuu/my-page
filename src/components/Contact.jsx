const Contact = () => {
    return (
        <>
            <div className="element">
                <span className="element-title" aria-hidden="true">
                    <p className="element-bar">contact</p>
                </span>

                <section>
                    <div className="element-main-text">
                        <p>Contact with me!</p>
                    </div>
                    <div className="element-content">
                        <p>
                            If you would like to get in touch with me, you can send me an email at
                            my Gmail address. Alternatively, you can also reach me by phone, calling
                            my number. I would be happy to answer your questions and discuss
                            potential collaboration opportunities.
                        </p>
                    </div>
                    <div className="footer-container">
                        <div>
                            <p className="footer-title">contact</p>
                            <span className="footer-content">
                                <p
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-content-element">
                                    +48 123123123
                                </p>
                                <a
                                    href="mailto:karol.legut121@gmail.com"
                                    className="footer-content-element">
                                    karol.legut121@gmail.com
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/karol-legut-587481252/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-content-element">
                                    linkedin
                                </a>
                                <a
                                    href="https://github.com/Lefjuu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-content-element">
                                    Github
                                </a>
                            </span>
                        </div>
                        <div>
                            <p className="footer-title">location</p>
                            <div className="footer-content">
                                <p>Kęty, Poland</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Contact
