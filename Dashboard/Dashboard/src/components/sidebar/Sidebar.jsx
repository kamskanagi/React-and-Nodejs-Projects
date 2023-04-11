import React, { useState }from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
// import SportsHandballIcon from '@mui/icons-material/SportsHandball';
// import PaidIcon from '@mui/icons-material/Paid';
// import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./sidebar.scss"
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = ({ setSelectedSection ,handleSectionChange }) => {

  const handleLinkClick = (e) => {
    e.preventDefault();
    setSelectedSection(e.target.getAttribute('href').substring(1));
  };

  
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">

      <div className="top"> 
      <Link to="/" style={{ textDecoration: "none" }}> 
        <span className="logo">Dashboard</span>
        </Link>
      </div>
    <hr />
      <div className="center"> 
      <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>

{/* 
        <ul>
            <Link to="/users" style={{ textDecoration: "none" }}> 
              <li><DashboardIcon className="icon"/>
                  <span>BothWell (Users) </span>
              </li>
            </Link>

            <Link to="/products" style={{ textDecoration: "none" }}> 
              <li><SportsHandballIcon className="icon"/>
                  <span>SportGear (Product)</span>
              </li>
            </Link>

            <Link to="/shortcut/bothwell" style={{ textDecoration: "none" }}> 
              <li><DashboardIcon className="icon"/>
                  <span>BothWell </span>
              </li>
            </Link>

            <Link to="/shortcut/sportgear" style={{ textDecoration: "none" }}> 
              <li><SportsHandballIcon className="icon"/>
                  <span>SportGear</span>
              </li>
            </Link>


            <Link to="/" style={{ textDecoration: "none" }}> 
              <li><PaidIcon className="icon"/>
                  <span>CTBC</span>
              </li>
            </Link>

            <Link to="/" style={{ textDecoration: "none" }}> 
              <li><SettingsSystemDaydreamIcon className="icon"/>
                  <span>OutSystem</span>
              </li>
            </Link>
            <Link to="#section1" style={{ textDecoration: "none" }}> 
              <li>Section 1</li>
            </Link>

            <Link to="#section2" style={{ textDecoration: "none" }}> 
              <li>Section 2</li>
            </Link>

            <Link to="/shortcut/section3" style={{ textDecoration: "none" }}> 
                <li><span>Section 3 </span></li>
            </Link>

        <li><a href="#section1" onClick={handleLinkClick}>Section 1</a></li>
        <li><a href="#section2" onClick={handleLinkClick}>Section 2</a></li>
        <li><a href="#section3" onClick={handleLinkClick}>Section 3</a></li>
        <li><a href="#section1" onClick={() => handleSectionChange('section1')}>Section 1</a></li>
        <li><a href="#section2" onClick={() => handleSectionChange('section2')}>Section 2</a></li>
        <li><a href="#section3" onClick={() => handleSectionChange('section3')}>Section 3</a></li>

        </ul>
         */}
      </div>


      <div className="bottom"> 
         <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })} > </div>
         <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}> </div>
      </div>

    </div>
  )
}

export default Sidebar
