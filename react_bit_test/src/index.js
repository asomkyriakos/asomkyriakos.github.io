import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage"
import App from "./App";
import Popup from "./popup"; // lowercase filename but still imported fine
import Credits from "./credits"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage/>}/>
                <Route path="App" element={<App />} />
                <Route path="/popup" element={<Popup />} />
                <Route path="/credits" element={<Credits />} />
            </Routes>
        </Router>
    </React.StrictMode>
);