// import { Box,makeStyles } from "@material-ui/core";
// import NavBar from "./Navbar";
// import Banner from './Banner';
// import Slide from "./Slide";
// import MidSection from "./MidSection";

// const useStyle=makeStyles({
//     component:{
//         padding:10,
//         backgroundColor:"#f2f2f2",
//         marginTop:-50,
//     },

//     rightwrapper:{
//         background:"#fffff",
//         padding:"5px",
//         margin:"12px 0 0 10px",
//         width:"17%"
//     }
// })

// const Home=()=>{

//     const classes=useStyle()
//     const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

//     return  <div>
//         <NavBar/>
        
//         </div>
// }

// export default Home;
import React, { useState } from 'react';
import './Home.css';

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="dropdown" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
      <button className="dropdown-button">Dropdown</button>
      {showDropdown && (
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <div className="dropdown-submenu">
            <a href="#">Submenu</a>
            <div className="dropdown-submenu-content">
              <a href="#">Submenu Link 1</a>
              <a href="#">Submenu Link 2</a>
            </div>
          </div>

        
          <div className="dropdown-submenu">
            <a href="#">Submenu</a>
            <div className="dropdown-submenu-content">
              <a href="#">Submenu Link 1</a>
              <a href="#">Submenu Link 2</a>
            </div>
          </div>


          <div className="dropdown-submenu">
            <a href="#">Submenu</a>
            <div className="dropdown-submenu-content">
              <a href="#">Submenu Link 1</a>
              <a href="#">Submenu Link 2</a>
            </div>
          </div>

          <div className="dropdown-submenu">
            <a href="#">Submenu</a>
            <div className="dropdown-submenu-content">
              <a href="#">Submenu Link 1</a>
              <a href="#">Submenu Link 2</a>
            </div>
          </div>


        </div>
      )}
    </div>
  );
};

const DropdownList = () => {
  return (
    <div className="dropdown-list">
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
    </div>
  );
};

export default DropdownList;
