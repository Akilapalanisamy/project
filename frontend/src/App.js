import React, { Component } from 'react';
import Form from './component/Form';
import Sign from './component/Sign';
import Register from './component/register';
import Student from './component/Student';
import Teacher from './component/Teacher';
import Navbar from "./component/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import Aboutus from './component/Navbar/Aboutus';
import Contact from './component/Navbar/Contact';
import Footer from './component/Footer';
import Home from './component/Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import CoursePage from './component/CoursePage';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/Navbar" element={<Navbar/>} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Form" element={<Form />} /> 
            <Route path="/Sign" element={<Sign />} />
            <Route path="/Student" element={<Student />} />
            <Route path="/CoursePage" element={<CoursePage />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Teacher" element={<Teacher />} />
            <Route path="/Footer" element={<Footer />} />
            
          </Routes>
          
         
        </Router>
      </div>
    );
  }
}

export default App;


