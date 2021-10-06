import React from 'react';
import Footer from './components/Footer';
import CovidTracker from './components/global/CovidTracker';
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
        <NavBar />
        <CovidTracker/>
        <Footer />
    </>
  );
}

export default App;