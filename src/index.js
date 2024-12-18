import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./navbar";
import Home from "./landingpage/Homepage/Home.js";
import EducationHome from './landingpage/Educationpage/Home.js';
import Project from './landingpage/Projectpage/Project.js';
import DetailProject from './landingpage/Projectpage/DetailProject.js';
import Contact from './landingpage/Contactpage/Contact.js';
import Footer from './footer.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/education" element={<EducationHome/>}/>
    <Route path="/projects" element={<Project/>}/>
    <Route path="/project/:id" element={<DetailProject/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
)