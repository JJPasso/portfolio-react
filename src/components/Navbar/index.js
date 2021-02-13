import React from 'react'
import "./index.css";
import logo from '../../media/development.svg'

const Navbar = ({ isScrolling }) => {
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"});
    }

    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            
                <img src={logo} alt='Logo' className="navbar-logo" onClick={toTheTop}></img>
                <div>Proyectos</div>
            
            
        </nav>
    )
}

export default Navbar
