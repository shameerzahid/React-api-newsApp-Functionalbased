
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App = () => {
  const [progress, setProgress] = useState(0)
  const pagesize = 15;
  const apikey = process.env.REACT_APP_NEWS_API;


    return (
      <div>
          <BrowserRouter>
          <Navbar/>
          <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
        <Route exact path="/" element={ <News setProgress= {setProgress} apikey = {apikey} key="general" pageSize={pagesize} country = "in" category="general" />} />
        <Route exact path="/business" element={ <News setProgress= {setProgress} apikey = {apikey} key="business" pageSize={pagesize} country = "in" category="business" />} />
        <Route exact path="/entertainment" element={ <News setProgress= {setProgress} apikey = {apikey} key="entertainment" pageSize={pagesize} country = "in" category="entertainment" />} />
        <Route exact path="/general" element={ <News setProgress= {setProgress} apikey = {apikey} key="general" pageSize={pagesize} country = "in" category="general" />} />
        <Route exact path="/health" element={ <News setProgress= {setProgress} apikey = {apikey} key="health" pageSize={pagesize} country = "in" category="health" />} />
        <Route exact path="/science" element={ <News setProgress= {setProgress} apikey = {apikey} key="science" pageSize={pagesize} country = "in" category="science" />} />
        <Route exact path="/sports" element={ <News setProgress= {setProgress} apikey = {apikey} key="sports" pageSize={pagesize} country = "in" category="sports" />} />
        <Route exact path="/technology" element={ <News setProgress= {setProgress} apikey = {apikey} key="technolgy" pageSize={pagesize} country = "in" category="technology" />} />
        </Routes>
          </BrowserRouter>
    
      
      </div>
    )

}

export default App;

