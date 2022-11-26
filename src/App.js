import { NavBar } from "./components/navBar/navBar";
import { Body } from "./components/body/Body"
import { MainContextProvider } from "./context/MainContext"
import Login from "./components/login/Login"
import AdminPanel from "./components/adminPanel/adminPanel"
import TutorPanel from "./components/tutorPanel/TutorPanel"
import { useState } from "react";
import "./login.css";

function App() {

  const [logType, setLogType] = useState(1);

  if (logType === 0) {
    return <div id="mainContainer">
      <Login log={setLogType}/>
    </div>
  }else if (logType === 1) {
    return <>
      <MainContextProvider>
        <NavBar />
        <Body />
      </MainContextProvider>
    </>;
  }else if(logType === 2){
    return <TutorPanel/>
  }else if(logType === 3){
    return <AdminPanel/>
  }
}
export default App;
