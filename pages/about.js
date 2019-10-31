import Menu from '../comps/Menu'
import { useState } from 'react'
import '../styles/about.scss'
import Head from 'next/head'

const about = () => {
    
    const [menu, setMenu] = useState(0)
    
    return(
        <div>
            <Head>
                <title> About - Ajay Yadav</title>
            </Head>
            <button className="menu-btn" onClick={ () => setMenu(!menu) }>
                <i class="fas fa-bars"></i>
            </button>
            { menu ? <Menu close= { () => setMenu(!menu) } /> : <> </>}
            
            <div className="about-wrapper">
                <h2>About Me</h2>
                <p>
                    My name is Ajay Kumar Yadav. I am a 2nd year Undergraduate at the department of Agricultural and Food Enginnering
                    at Indian Institute of Technology, Kharagpur. I love to code in my free time. I have had a keen interest in coding and web development since an early age.
                    I try to make simple, responsive and pleasing to the eye User Interfaces and soothing User Experience. <br/>
                    My skills include C, Python, CSS3, JS and MERN Stack with NextJS. Apart from these, I am very well familiar with latest trends
                    in web like PWA, SSR, SEO and many more. I love to take new coding challenges on the 
                    internet. I am currently diving deep into Machine Learning in Python with TensorFlow and Keras.
                </p>
            </div>
        </div>
    )
}
export default about;
