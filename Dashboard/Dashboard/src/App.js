import Home from './pages/home/Home.jsx'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import List from './pages/list/List.jsx';
import Single from './pages/single/Single.jsx';
import New from './pages/new/New.jsx';
import Login from './pages/login/Login.jsx';
import Shortcut from './pages/Shortcut/Shortcut.jsx';
import { productInputs, userInputs } from './pages/formsource.js';
import "./style/dark.scss"
import { useState } from 'react';
import { DarkModeContext} from "./context/darkModeContext";
import { useContext } from "react";
import Sportgear from './pages/maidc/sportgear/Sportgear.jsx';
import Bothwell from './pages/maidc/bothwell/Bothwell.jsx';
import Section3 from './pages/sections/Section3.jsx';

function App() {

  const { darkMode } = useContext(DarkModeContext);

  return (
    
  <div className={darkMode ? "app dark" : "app"}>
    <Router>
      <Routes> 
        <Route path='/'>
          <Route  index element={<Home />}/> 
          <Route  path='login' element={<Login />}/>

          <Route  path='users'>
            <Route  index element={<List />}/>
            <Route  path=':useId' element={<Single />}/>
            <Route  path='new' element={<New inputs={userInputs} title="Adde New User" />}/>
          </Route>

          <Route  path='products'>
            <Route  index element={<List />}/>
            <Route  path=':productId' element={<Single />}/>
            <Route  path="new" element={<New inputs={productInputs} title="Adde New Product"/>}/>
          </Route>

          
          <Route  path='shortcut'>
            <Route  index element={<Shortcut />}/>
            <Route  path="sportgear"  element={<Sportgear />}/>
            <Route  path="bothwell"  element={<Bothwell />}/>
            <Route  path="section3"  element={<Section3 />}/>
            
            
          </Route>
         </Route>
      </Routes>
    </Router>
    </div>

  );
}

export default App;
