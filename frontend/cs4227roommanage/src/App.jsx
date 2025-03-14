
import './App.css'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Pages/Home';
import Booking from './Pages/Booking';
import { Table } from "./Pages/Table";
import Navbar from './Pages/Navbar';


const App = () => {
  // return <Table />;

  return (
    
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App
