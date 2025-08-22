import React from "react";

function ButtonTag({ label, color, size }) {
    return (
        <button
            style={{
                backgroundColor: color,
                color: "white",
            }}
        >
            {label}
        </button>
    );
}

export default ButtonTag;