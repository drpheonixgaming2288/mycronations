import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import Landing from "./components/landing/Landing";
import Nav from "./components/nav/Nav";
import Ads from "./components/ads/Ads";
import Footer from "./components/footer/Footer";

const firebaseConfig = {
  apiKey: "AIzaSyDZQw0-1NsPyB55GOENJObaqZ9nkj7fVLU",
  authDomain: "mycronations-a3b4c.firebaseapp.com",
  projectId: "mycronations-a3b4c",
  storageBucket: "mycronations-a3b4c.appspot.com",
  messagingSenderId: "789910154253",
  appId: "1:789910154253:web:9f1c1b2f59c91624473944",
};

const app = initializeApp(firebaseConfig);

function App() {
  const db = getFirestore(app);
  const [countries, setCountries] = useState();

  // useEffect(() => {
  //   getCountries(db).then((data) => {
  //     console.log("data", data);
  //     setCountries(data);
  //   });
  // }, []);

  // Get a list of cities from your database
  async function getCountries(db) {
    const countriesCol = collection(db, "countries");
    const countriesSnapshot = await getDocs(countriesCol);
    const countriesList = countriesSnapshot.docs.map((doc) => doc.data());
    return countriesList;
  }

  return (
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
  );
}

export default App;
