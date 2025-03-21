import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import Chat from "./Chat.jsx";

document.cookie = `token=ba0416e71d89e9ba21410f38d5c36b056b36bc1b; path=/;`;
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Chat />
  </StrictMode>
);
