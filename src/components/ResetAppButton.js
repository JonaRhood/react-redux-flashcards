// ResetAppButton.js
import React from "react";
import Swal from "sweetalert2";

export default function ResetAppButton() {

    const handleReset = async () => {
        const { value } = await Swal.fire({
            title: "Confirm Reset",
            text: "Resetting the app will remove all your created quizzes and topics, restoring the application to its initial state.",
            icon: "warning",
            confirmButtonText: "Confirm",
            cancelButtonText: "Cancel",
            showCancelButton: true,
        });

        if (value) {
            localStorage.removeItem("state");
            window.location.reload()
        }
    }

    return (
        <div id="resetButton">
            <button onClick={handleReset}>
                Reset App
            </button>
        </div>
    );
}

