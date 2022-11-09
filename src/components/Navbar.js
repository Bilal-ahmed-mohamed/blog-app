import { Link } from 'react-router-dom'



let Navbar = () => {

    return <div>
        <nav className="navbar" >
            <h1>my blogs</h1>
            <div className="links">
                <Link to ="/">Home</Link>
                <Link to ="/Create">New Blog</Link>
            </div>
        </nav>
    
    </div>
}


export default Navbar;