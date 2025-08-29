import "./styles/testStyles.css"
import coolPhoto from "./photos/apePhoto.jpg"
import eggPhoto from "./photos/Humpty_Dumpty.webp"
import RotatingText from "./ReactBitComponents/RotatingText/RotatingText";
import Stack from "./ReactBitComponents/Stack/Stack";
import BlurText from "./ReactBitComponents/BlurText/BlurText";
import TextType  from "./ReactBitComponents/TextType/TextType";
import ShinyText from "./ReactBitComponents/ShinyText/ShinyText";
import GradientText from "./ReactBitComponents/GradientText/GradientText";



function MoreTests(){
    const images = [
        { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
        { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
        { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
        { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
        { id: 5, img: eggPhoto},
        //{ id: 6, img: coolPhoto}
    ];


    return(
        <div className="main-frame">
            <h1>Honest Opinion:</h1>
            <div className="text-box">

                <RotatingText
                    texts={["This", "is", "a", "cool", "slideshow"]}
                    mainClassName="rotating-text"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                />

            </div>
            <div>
                <BlurText
                    text="from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
                    delay={200}
                    animateBy="words"
                    direction="right"
                    className="text-2xl mb-8"
                />
            </div>
            <div className= "text-size">
                <Stack
                    randomRotation={true}
                    sensitivity={180}
                    sendToBackOnClick={false}
                    cardDimensions={{ width: 200, height: 200 }}
                    cardsData={images}
                />
            </div>
            <div className= "text-size">
            <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
            >
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
            </GradientText>
            </div>
        </div>

    );
}

export default  MoreTests;