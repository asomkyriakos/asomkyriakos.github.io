import RotatingText from "./ReactBitComponents/RotatingText/RotatingText";
import "./styles/testStyles.css"

function MoreTests(){

    return(
        <div className="main-frame">
            <h1>Honest Opinion:</h1>
            <div className="text-box">

                <RotatingText
                    texts={["I", "don't", "give", "a", "fuck"]}
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
        </div>

    );
}

export default  MoreTests;