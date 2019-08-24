import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header.js';
import './App.css';
import Main from "./main.js";
import Contact from './contact.js'
import Footer from './footer.js'

function App() {
  return (
    <div>
    <Main/>
    <Header/>
    </div>
   
);
};
export default App;