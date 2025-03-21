import { useState } from "react";
import "./App.css";
import LeftContainer from "./components/LeftContainer/LeftContainer";
import RightContainer from "./components/RightContainer/RightContainer";

function App() {
  let [currentChat, setCurrentChat] = useState({});

  return (
    <main className="body">
      <LeftContainer
        currentChat={currentChat}
        setCurrentChat={setCurrentChat}
      />
      <RightContainer
        currentChat={currentChat}
        setCurrentChat={setCurrentChat}
      />
    </main>
  );
}

export default App;
