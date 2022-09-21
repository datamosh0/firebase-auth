import { useDispatch } from "react-redux";
import { login } from "./app/userSlice";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = async () => {
    try {
      let { user } = await signInWithPopup(auth, provider);
      const { email, displayName, photoURL, uid } = user;
      const newuser = {
        email,
        displayName,
        photoURL,
        uid,
      };
      dispatch(login(newuser));
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <p onClick={handleClick} style={{ cursor: "pointer" }}>
          Sign in with Google
        </p>
      </header>
    </div>
  );
}
export default Login;
