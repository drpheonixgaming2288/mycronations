import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { AuthProvider } from "./AuthContext";
import Landing from "./components/landing/Landing";
import Nav from "./components/nav/Nav";
import Ads from "./components/ads/Ads";
import Footer from "./components/footer/Footer";

import { auth, db } from "./Firebase";
import Register from "./components/register/Register";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [countries, setCountries] = useState();

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getCountries(db).then((data) => {
      console.log("data", data);
      setCountries(data);
    });
  }, []);

  // Get a list of cities from your database
  async function getCountries(db) {
    const countriesCol = collection(db, "countries");
    const countriesSnapshot = await getDocs(countriesCol);
    const countriesList = countriesSnapshot.docs.map((doc) => doc.data());
    return countriesList;
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
     })
  }, [])

  return (
    <BrowserRouter>
      <AuthProvider value={{ currentUser }}>
        <div className="App">
          <div className="row">
            <Nav />
            <div className="col-12 p-0"></div>
          </div>
          <div className="row">
            <div className="col-2 text-center p-0">
              <Ads />
            </div>
            <div className="col-8">
              <Routes>
                <Route path="/" element={<Landing countries={countries} />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
            <div className="col-2 text-center p-0 m-0">
              <Ads />
            </div>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
