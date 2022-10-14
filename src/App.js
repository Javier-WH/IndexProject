import { NavBar } from "./components/navBar/navBar";
import { Body } from "./components/body/Body"
import { MainContextProvider } from "./context/MainContext"
import Login from "./components/login/Login"
import { useState } from "react";
import "./login.css";

function App() {

  const [logType, setLogType] = useState(0);

  if (logType === 1) {
    return <>
      <MainContextProvider>
        <NavBar />
        <Body />
      </MainContextProvider>
    </>;
  } else if (logType === 0) {
    return <div id="mainContainer">
      <Login log={setLogType}/>
    </div>
  }
}
export default App;
