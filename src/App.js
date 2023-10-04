import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Home from './components/pages/Home'


const App = () => {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path = '/' exact element = {Home}/> 
      </Routes>
  
    </>
  );
}

export default App;
