import { useState } from "react";
import "../Toggle-switch/ToggleSwitch.css";

export const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const HandleToggleSwitch = () => {
          setIsOn(!isOn);
        }
       
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className={`switch-state ${isOn ? "On" : "Off"} w-96 h-40 rounded-full bg-gray-400 flex  items-center`}  onClick={HandleToggleSwitch}>
                <div className={`switch ${isOn ? "On" : "Off"} w-32 h-32 bg-red-600 rounded-bl-full rounded-br-full rounded-t-full border-4 border-yellow-300 ml-5 cursor-pointer flex justify-center items-center`}>
                    <span className="text-6xl">{isOn ? "On" : "Off"}</span>
                </div>
            </div>
        </div>
    )
}