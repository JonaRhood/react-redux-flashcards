// ResetAppButton.js
import React from "react";

export default function ResetAppButton() {

    const handleReset = () => {
        localStorage.removeItem("state");
        window.location.reload()
    }

    return (
        <div id="resetButton">
            <button onClick={handleReset}>
                Reset App
            </button>
        </div>
    );
}

