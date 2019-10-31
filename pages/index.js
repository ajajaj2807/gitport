import Head from 'next/head'
import '../styles/main.scss'
import { useState, useEffect } from 'react'
import Menu from '../comps/Menu'

const Index = () => {

    const [menu, setMenu] = useState(0)
    const [loading, setLoading] = useState(1)
    useEffect(async () => {
        setLoading(0)
    }, [])
    return(
    loading ? <div className="loading-splash">
        <div className="center">
        <h1>😪</h1>
        <h2>Loading...</h2>
        </div>
        <Head>
            <title>Loading...</title>
        </Head>
    </div> : 
    <div>
        <Head>
            <title>Home - Ajay Yadav</title>
            <link rel="shorcut icon" href="../static/favicon.png" />
        </Head>
        <div className="main-content">
            <span className="greet">
                Hi there <div className="moving-hand">👋</div>,
                <br /> I am 
                <div className="name">
                    Ajay
                    <div className="name-box">
                        <a href="https://www.fb.com/ajajaj2807">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/_ajajaj_">
                        <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ajajaj2807">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.github.com/ajajaj2807">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </span> <br/>
            <span className="subtitle">
                I am a web <b>developer/designer</b> based in <b>India</b>. I love to make simple yet compelling interfaces.
                Trying to make web a better place.
            </span>
        </div>
        <div className="landing-img">
            <img src="../static/hc01.png"></img>
        </div>
        <button className="menu-btn" onClick={ () => setMenu(!menu) }>
            <i class="fas fa-bars"></i>
        </button>
        { menu ? <Menu close= { () => setMenu(!menu) } /> : <> </>}
    </div>
    )
}

export default Index;