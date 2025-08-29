import "./styles/indexStyles.css";
import SplitText from "./ReactBitComponents/SplitText/SplitText";

function WelcomePage(){

    return(
        <div className="index-format">
            <SplitText
                text="React App Test!"
                className="text-2xl font-semibold text-center"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
            />
            <button
                className= "index-button"
                onClick={() => (window.location.href = "App")}
            >
                Welcome
            </button>
            <button
                className= "index-button"
                onClick={() => (window.location.href = "MoreTests")}
            >
                Showcase
            </button>
            <button
                className= "index-button"
                onClick={() => (window.location.href = "Credits")}
            >
                Credits
            </button>
            <button
                className= "index-button"
                onClick={() => (window.location.href = "Regards")}
            >
                For the End
            </button>
        </div>
    );
}
export default WelcomePage;