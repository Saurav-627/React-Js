import { useState } from "react";
export const MyState = () => {
   const[count, setCount] = useState(0);

   const HandleButtonClick = () => {
    setCount(() => count + 1);
   }

    return (
     <section className="w-full h-screen text-center font-bold ">
        <h1 className="text-5xl">{count}</h1>
        <button onClick={HandleButtonClick} className="p-5 bg-green-400 rounded-md text-5xl">Increment</button>
     </section>
    );
}