import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage"
import App from "./App";
import Popup from "./popup"; // lowercase filename but still imported fine
import Credits from "./credits"
import MoreTests from "./moreTests";
import EasterEgg from "./easterEgg";
import Regards from "./Regards";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage/>}/>
                <Route path="App" element={<App />} />
                <Route path="/popup" element={<Popup />} />
                <Route path="/credits" element={<Credits />} />
                <Route path="/moreTests" element={<MoreTests/>}/>
                <Route path="/Regards" element={<Regards/>}/>
                <Route path="/easterEgg" element={<EasterEgg/>}/>
            </Routes>
        </Router>
    </React.StrictMode>
);