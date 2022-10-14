import {Logo} from "./componets/logo/logo"
import {DataContainer} from "./componets/dataContainer/dataContainer"
import './Login.css';

function Login({log}) {
  return <div id="loginContainer">
    <Logo/>
    <DataContainer log={log}/>
  </div>
}

export default Login;
