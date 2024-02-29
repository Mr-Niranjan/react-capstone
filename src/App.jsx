import {BrowserRouter , Routes , Route} from "react-router-dom";
// import { useState } from 'react';
import Browse from "./pages/Browse.jsx";
import Display from "./pages/Display.jsx";
import Movies from "./pages/Movies.jsx";
import Register from "./pages/Register.jsx";
import './App.css'

function App() {
  return <BrowserRouter>
  <Routes>

    <Route path = "/"        element = {<Register/>} />
    <Route path = "/Display" element = {<Display/>} />
    <Route path = "/Movies"  element = {<Movies/>} />
    <Route path = "/Browse"  element = {<Browse/>} />

  </Routes>
  </BrowserRouter>
}

export default App
