import Code from '../images/code.png'

const Profile = () => {
    return (
        <>
            <div className="element">
                <span className="element-title" aria-hidden="true">
                    <p className="element-bar">About&nbsp;me</p>
                </span>

                <section>
                    <div className="element-main-text">
                        <p>Hi, I'm Karol Legut, </p>
                        <p>some know me as "Lefju"</p>
                    </div>
                    <div className="element-content">
                        <p>
                            I am a beginner programmer who is passionate about software development
                            and wants to develop my skills in this area. Although I do not have much
                            experience yet, I am motivated to learn and acquire knowledge about
                            different programming technologies and tools. Currently, I am focused on
                            learning the JavaScript language, as well as its libraries and
                            frameworks such as Node.js, Express.js, and many others. <br></br>I try
                            to regularly participate in courses, trainings, and other events to stay
                            up-to-date with the latest trends in the industry. In my work, I always
                            prioritize code quality, testing, and documentation to ensure that the
                            applications I create are not only functional but also easy to maintain
                            and develop.
                        </p>
                        <img src={Code} alt="" className="element-content-img" />
                        <p>
                            I am looking for job or internship opportunities where I can develop my
                            programming skills and gain valuable experience. If you are looking for
                            a motivated and eager-to-learn beginner programmer, please feel free to
                            contact me to discuss potential collaboration opportunities
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Profile
