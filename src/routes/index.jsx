import { Route, BrowserRouter, Routes } from "react-router-dom"

import Home from "../pages/home"
import Post from "../pages/post"
import About from "../pages/about"
import Contact from "../pages/contact"
import Navbar from "../components/navbar"

export default function ApplicationRoutes() {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post" element={<Post/>}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    );
}