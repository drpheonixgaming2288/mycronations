import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import Landing from "./components/landing/Landing";
import Nav from "./components/nav/Nav";
import Ads from "./components/ads/Ads";
import Footer from "./components/footer/Footer";
import War from "./components/war/War";


function App() {
  

  return (
    <>
      <div className="App">
        <div className="row">
          <div className="col-12 p-0">
            <Nav />
          </div>
        </div>
        <div className="row">
          <div className="col-2 text-center p-0">
            <Ads />
          </div>
          <div className="col-8">
            <Routes>
              <Route path="/" element={<Landing />} />
            </Routes>
          </div>
          <div className="col-2 text-center p-0 m-0">
            <Ads />
          </div>
          <Footer/>
        </div>

      </div>
    </>
  );
}

export default App;
