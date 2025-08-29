import React, { useState } from 'react';
import './App.css';
import twitterCircle from "./photos/twitterCircle.png";
import twitterBird from "./photos/twitterBird.jpg";
import twitterComment from "./photos/commentImage.jpg";

function User() {
    return (
        <div className="tweet-header">
            <div className="user-info">
                <img src={twitterCircle} alt="Twitter Circle" className="profile-pic" />
                <div>
                    <h3 className="username">User</h3>
                    <h4 className="handle">@User</h4>
                </div>
            </div>
            <img src={twitterBird} alt="Twitter Bird" className="twitter-logo" />
        </div>
    );
}


function Description(){
    return(
        <h4>
            from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
        </h4>

    );
}

function Link() {
    const handleClick = () => {
        window.open("https://www.google.com", "_blank", "noopener,noreferrer");
    };

    return (
        <h4 onClick={handleClick} style={{ cursor: "pointer", color: "blue" }}>
            www.google.com
        </h4>
    );
}

function Title(){
    return(
        <h3>
            The morning sun spilled across the quiet street, casting long golden shadows that danced between the trees. A light breeze carried the scent of fresh bread from a nearby bakery, mingling with the earthy aroma of dew on the grass. People began to emerge from their homes, some with steaming mugs of coffee in hand, while others hurried past with the determined stride of those already late. The city wasn’t fully awake yet, but there was a certain calm energy in the air, the kind that hinted at endless possibilities for the day ahead.
            Further down the block, a young boy crouched beside a stray cat, offering it crumbs from his sandwich. The cat, wary but hungry, edged closer with cautious steps, its tail flicking back and forth. Around them, traffic began to thicken, car horns sounding in impatient bursts as the rhythm of daily life picked up. Above, a flock of pigeons scattered suddenly, their wings catching the light as they wheeled across the sky. For a brief moment, time seemed suspended—just a simple morning scene, but one filled with small, unnoticed details that stitched the world quietly together.
        </h3>
    );
}

function NumOfHearts(){

    return(
        <h4>
            ❤️ 675
        </h4>
    );
}

function DateCreated(){
    return(
        <h4>1:17 PM - Aug 28, 2025</h4>
    );
}

function CommentUrl(){
    const handleClick = () => {
        window.open("https://www.google.com", "_blank", "noopener,noreferrer");
    };

    return(
        <div className="commentUlr-format">
            <img
                src={twitterComment}
                alt="Twitter Comment"
                className="profile-pic"
                style={{ height: "20px", width: "20px" }}
            />
            <h4 onClick={handleClick} style={{ cursor: "pointer", color: "blue" }}>
                482 people are talking about this
            </h4>

        </div>
    );
}

function App(){

    return(
        <div className="center-class">
            <div className="top-bar">
                <User/>
            </div>
            <div className="description-container">
                <Description/>
            </div>
            <div className="link-container">
                <Link/>
            </div>
            <div className="black-border">
                <Title/>
            </div>
            <div className="heart-tag">
                <NumOfHearts/>
                <DateCreated/>
            </div>
            <div className="commentUrl-container">
                <CommentUrl/>
            </div>

        </div>

    );
}

export default App;
