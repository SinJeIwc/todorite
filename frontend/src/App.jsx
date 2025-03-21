import { useState } from "react";
import "./App.css";
import "./index.css";
import LeftContainer from "./components/LeftContainer/LeftContainer";
import RightContainer from "./components/RightContainer/RightContainer";
import useUser from "./services/useUser.jsx";

function App() {
  let [selectedContact, setSelectedContact] = useState({});
  const me = useUser();

  if (!me) return <div>Loading user!</div>;
  if (!selectedContact) return <div>Choose a chat!</div>;

  return (
    <main className="body">
      <LeftContainer
        selectedContact={selectedContact}
        setSelectedContact={setSelectedContact}
        me={me}
      />
      <RightContainer
        selectedContact={selectedContact}
        setSelectedContact={setSelectedContact}
        me={me}
      />
    </main>
  );
}

export default App;
