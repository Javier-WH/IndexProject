import { NavBar } from "./components/navBar/navBar";
import { Body } from "./components/body/Body"
import { MainContextProvider } from "./context/MainContext"

function App() {
  return <>
    <MainContextProvider>
      <NavBar />
      <Body />
    </MainContextProvider>
  </>;
}

export default App;
