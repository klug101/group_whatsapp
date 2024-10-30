import React, { Component } from "react";
import './NavBar.css'

class Navbar extends Component {
    render() {
        return(
            <nav className="NavbarItems">

                <h1 className="navbar-logo">
                    <i >
                        <img src="images/menu.svg" alt="whatsapp logo" />
                    </i>
                </h1>
                
                <h1 className="navbar-logo">
                <h1 className="navmarg text-center text-white font-bold"> مجتمع واتساب </h1>
                    <i >
                        <img src="images/logo.png" alt="whatsapp logo" />
                    </i>
                </h1>
            </nav>
        )
    }
}

export default Navbar