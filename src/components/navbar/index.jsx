import React from "react";
import {Link} from "react-router-dom"

import "./styles.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <Link class="logo" to="/">
                    <h3>Meu Blog</h3>
                </Link>
            </div>

            <div className="float-menu">
                <Link className="nav-link" to="/">
                    Home
                </Link>
                <Link className="nav-link" to="/about">
                    Sobre
                </Link>
                <Link className="nav-link" to="/contact">
                    Contato
                </Link>
            </div>
        </nav>
    );
}