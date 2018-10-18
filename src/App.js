import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/login';
import Navbar from './Component/Navbar';
import Profile from './Pages/Profle';

class App extends Component {
  render() {
    return (
      <div>
         {/* <Login/> */}
     {/*   <LandingPage/>  */}
     {/*  <Navbar/> */}
    <Profile/>
            </div>
    );
  }
}

export default App;
