import logo from "./logo.svg";
import "./App.css";
import { logout } from "./app/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "./app/userSlice";
function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Logged In</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div>{currentUser.displayName}</div>
        <div>{currentUser.email}</div>
        {/* <img src={`${currentUser.photoURL}`}></img> */}
        <button onClick={() => dispatch(logout())}>Logout</button>
      </header>
    </div>
  );
}
export default App;
