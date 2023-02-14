import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";



export const NavBar =() =>{
    return (
        <div className="navbar">
            <div className="logo">
                <h3>Career Next</h3>
            </div>
            {/*logo Container closed*/}
            <div className="navcon">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                    <li><Link to="blog">Blog</Link></li>
                    
                </ul>

            </div>
        </div>
    )
}   