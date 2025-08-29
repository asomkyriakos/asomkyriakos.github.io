import React from "react";
import "./styles/testStyles.css";
import CoolVid from "./photos/CoolVid.mp4"; // import the video file
import CoolImage from "./photos/DragonGuy.jpg";

function EasterEgg() {
    return (
        <div>
            <video className="easter-egg-video" autoPlay loop muted>
                <source src={CoolVid} type="video/mp4" />
                Your browser does not support HTML video.
            </video>

            {/*<img*/}
            {/*    src={CoolImage}*/}
            {/*    alt="dragon"*/}
            {/*    className="easter-egg-image"*/}
            {/*/>*/}
        </div>
    );
}

export default EasterEgg;