import { useState, useContext } from 'react';
import { Context } from "./Context.jsx";
import { createSession } from './services';
import './login.css'

const Login = function({ setUserState, setErrorMessage }) {
  const [ context, setContext ] = useContext(Context);
  const [ username, setUsername ] = useState('');
  const [ isDisabled, setIsDisabled ] = useState(true);
  const [ isPending, setIsPending ] = useState(false);

  const onUserInput = (e) => {
    setUsername(e.target.value);
    setIsDisabled(!e.target.value);
  };

  const login = () => {
    setIsPending(true);
    createSession({ username })
    .then( userinfo => {
      setUserState({
        isLoggedIn: true,
        isPending: false,
        username,
      });
      setContext(userinfo.info);
      setErrorMessage(''); 
      setIsPending(false);
    })
    .catch( err => {
      setErrorMessage(err.error);
      setIsPending(false);
    });
  };

  return (
    <div className="login">
      <h1>Welcome to Cat Food Ingrdient List!</h1>
      <h3>Please log in first.</h3>
      <label>Username:</label>
      <input className="username-field" disabled={isPending} onChange={onUserInput} value={username} />
      <button className="login-button" onClick={login} disabled={isDisabled || isPending} >{ isPending ? "..." : "Login"}</button>
      <div className="requirement-block">
        <span>Require:</span>
        <span>1 upper case</span>
        <span>1 lower case</span>
        <span>1 number </span>
        <span>1 symbol from ".!@#$%^&#38;*"</span>
        <span>Length 8 - 16</span>
      </div>
    </div>
  );
};
export default Login;
