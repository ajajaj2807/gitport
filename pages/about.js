import Menu from '../comps/Menu'
import { useState } from 'react'

const about = () => {
    
    const [menu, setMenu] = useState(0)
    
    return(
        <div>
            <button className="menu-btn" onClick={ () => setMenu(!menu) }>
            <i class="fas fa-bars"></i>
        </button>
        { menu ? <Menu close= { () => setMenu(!menu) } /> : <> </>}
            <h1>About Section</h1>
            <p>
                Work in Progress
            </p>
        </div>
    )
}
export default about;
