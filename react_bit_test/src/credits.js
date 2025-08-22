import ChromaGrid from './ReactBitComponents/ChromaGrid/ChromaGrid'
import MePhoto from "./photos/Me.webp"
import "./styles/creditsStyles.css";

function Credits(){
    const items = [
        {
            image: MePhoto,
            title: "Kyriakos Asomatos",
            subtitle: "Full Stack Dev(for now)",
            handle: "@kyriakosasom",
            borderColor: "#3B82F6",
            gradient: "linear-gradient(145deg, #3B82F6, #000)",
            url: "https://github.com/asomkyriakos/asomkyriakos.github.io.git"
        },
    ];

    return(
        <>
        <div className="credits-style">
            <div style={{ height: '600px', position: 'relative' }}>
                <ChromaGrid
                    items={items}
                    radius={300}
                    damping={0.45}
                    fadeOut={0.6}
                    ease="power3.out"
                />
            </div>
        </div>
        </>
    );
}

export default Credits;