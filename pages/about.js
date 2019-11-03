import Menu from '../comps/Menu'
import { useState, useEffect } from 'react'
import '../styles/about.scss'
import Head from 'next/head'
import Fade from 'react-reveal/Fade'

const about = () => {
    
    const [menu, setMenu] = useState(0)
    
    return(
        <div>
            <Head>
                <title> About - Ajay Yadav</title>
                <link rel="shorcut icon" href="../static/aj-logo.svg" />
            </Head>
            <button className="menu-btn" onClick={ () => setMenu(!menu) }>
                <i class="fas fa-bars"></i>
            </button>
            { menu ? <Menu close= { () => setMenu(!menu) } /> : <> </>}
            
            <div className="about-wrapper">
                <div className="card-80 about-intro">
                <span className="big-title">
                    <Fade bottom big cascade>
                    So, you want to know about me? <br/>
                    Let's dive in!
                    </Fade>
                </span>
                </div>
                <div className="card-80 about-name">
                <img src="../static/about-01.svg" />
                <Fade right>
                
                        <div className="an-text">
                        <span className="big-title">
                        My name is Oliver Queen <br/>
                        </span>
                        <span>
                            Just kidding! My parents named me Ajay
                        </span>
                        </div>
                </Fade>
                </div>
                
                <div className="card-80 about-edu">
                <img src="../static/about-02.svg" />
                <Fade left>
                
                        <div className="an-text">
                        <span className="big-title">
                        I'm a student! <br/>
                        </span>
                        <span>
                            I am a 2nd year Undergraduate studying at 
                            Indian <br/> Institute of Technology, Kharagpur
                        </span>
                        </div>
                </Fade>
                </div>
                <div className="card-80 about-int">
                <img src="../static/about-03.svg" />
                <Fade right>
                
                        <div className="an-text">
                        <span className="big-title">
                        I love good music <br/>
                        </span>
                        <span className="about-subs">
                             I like to code and listen to good <br/>
                             beats whenever, wherever 
                        </span>
                        </div>
                </Fade>
                </div>
                
            </div>
        </div>
    )
}
export default about;
