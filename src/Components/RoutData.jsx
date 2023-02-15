import React from "react";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Contact} from "./pages/Contact"
import {Blog} from "./pages/Blog"
import {NavBar} from "./nav/NavBar"
import {Detaile} from "./pages/Detaile"




export const RoutData =() =>{
    return (
        <div>
            
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about"element ={<About/>} />
                <Route path="/contact"element ={<Contact/>} />
                <Route path="/blog"element ={<Blog/>} />
                <Route path="/detaile"element ={<Detaile/>} />
                

            </Routes>
            </BrowserRouter>

        </div>
    )
}