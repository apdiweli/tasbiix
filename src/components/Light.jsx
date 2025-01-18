import { useState } from "react";

function Light() {
    const [color, setColor] = useState(""); // Initial state is empty string
    
    // Function to update the state
    const handleOn = () => {
        setColor("yellow-500"); // Update color to yellow
    };
    const handleOff = () => {
        setColor("white"); // Update color to white
    };

    return (
        <div className="flex justify-center mt-5">
            <div>
                <h1 className="hello"></h1>
            
                <div
                    className={`w-[400px] h-[400px] border-8 border-black rounded-full mb-4 bg-${color}`}
                ></div>
                <button
                    onClick={handleOn}
                    className="bg-orange-400 px-12 py-2 text-white text-2xl ml-5"
                >
                    ON
                </button>
                <button
                    onClick={handleOff}
                    className="bg-blue-400 px-12 py-2 text-white text-2xl ml-3"
                >
                    OFF
                </button>
            </div>
        </div>
    );
}

export default Light;
