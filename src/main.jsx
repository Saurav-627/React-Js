import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
// import Profile from './components/Profile'
// import { Practices } from './practices.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Practices /> */}

    {/* <Profile /> */}
  </StrictMode>
);

