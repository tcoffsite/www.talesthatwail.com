import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/bootstrap-override.css';
import Navbar from "./components/navbar.js";
import ScrollToTop from './components/scroll-to-top.js';
import {
  Route,
  HashRouter
} from "react-router-dom";

import { Home } from "./components/pages/home.js";
import { MakeItRealCover } from "./components/pages/mir-cover.js";
import { PreviewMakeItReal } from "./components/pages/preview-mir.js";
import { TalesThatWail } from "./components/pages/tales-that-wail.js";
import { AboutMorganBender } from "./components/pages/about-morgan-bender.js";
import { Footer } from './components/footer';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <Navbar />
      </HashRouter>
      <HashRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/PreviewMakeItReal" component={PreviewMakeItReal}/>
      <Route exact path="/MakeItRealCover" component={MakeItRealCover}/>
      <Route exact path="/TalesThatWail" component={TalesThatWail}/>
      <Route exact path="/AboutMorganBender" component={AboutMorganBender}/>
      </HashRouter>
      <HashRouter>
      <Footer />
      </HashRouter>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
