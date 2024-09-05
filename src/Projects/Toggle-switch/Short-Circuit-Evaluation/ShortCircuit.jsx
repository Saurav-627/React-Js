import "../Short-Circuit-Evaluation/ShortCircuit.css";
import { useState } from "react";

const ShortCircuit = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [value, setValue] = useState();
  const SetValue = () => {
    const user = prompt("Enter Your Name");
    setValue(user);
  };

  const ToggleStatus = () => {
    setIsLoggedIn(!isLoggedIn);
    if(isLoggedIn){
      return setValue("");
    }
  }

 
  return (
    <section className="w-1/2 h-1/2 font-bold flex flex-col gap-10 bg-slate-50 rounded-lg text-black shadow-xl shadow-gray-600 p-8">
      <h1 className="text-center text-5xl">
        Welcome to the ShortCircuit Evaluation!
      </h1>

      {/* Conditional Rendering using short circuit  */}
      {isLoggedIn && <p>You are logged in!</p>}


      {/* Another example of short circuit evaluation  */}
      <p>{value ? `Hello, ${value}` : "Unknown User, Please Set User"}</p>

      <div className="grid grid-cols-3">
        <button onClick={() => ToggleStatus()} className="button">
          Toggle LogIn Status
        </button>
        <button onClick={() => SetValue()} className="button">
          Set User
        </button>
        <button onClick={()=> setValue("")} className="button">Clear User</button>
      </div>
    </section>
  );
};

export default ShortCircuit;
