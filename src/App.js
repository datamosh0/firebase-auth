import logo from "./logo.svg";
import "./App.css";
import { logout } from "./app/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "./app/userSlice";
function App() {
  const dispatch = useDispatch();
  const { displayName, email, photoURL, uid } = useSelector(selectUser);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Logged In</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div>{displayName}</div>
        <div>{email}</div>
        <img src={`${photoURL}`} alt="alt text"></img>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </header>
    </div>
  );
}
export default App;
