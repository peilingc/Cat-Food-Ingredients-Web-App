import './app.css';
import { useState, useEffect, useReducer } from 'react';
import { reducer, initState } from './state';
import { Context } from "./Context.jsx";
import { checkSession } from './services';
import Login from './Login';
import Logout from './Logout';
import ErrorMessage from './ErrorMessage';
import Menu from './Menu';

function App() {
  const [ userState, setUserState ] = useState({ isLoggedIn: false, isPending: true });
  const [ errorMessage, setErrorMessage ] = useState(''); //pass to all child components
  const [ context, setContext ] = useState("");
  const [ state, dispatch ] = useReducer(reducer, initState);

  useEffect( () => {
    checkSession()
    .then( userinfo => {
      setUserState({
        isLoggedIn: true,
        isPending: false,
        username: userinfo.username,
      });
      setContext(userinfo.info);
      setErrorMessage('');
    })
    .catch( err => {
      setUserState({
        isLoggedIn: false,
        isPending: false,
      });
      setErrorMessage(err.error);
    });
  }, []); 


  if(userState.isPending) {
    return (
      <div className="app">
        Loading...
      </div>
    );
  }

  let content;
  if(userState.isLoggedIn) {
    content = (
      <div>
        <Logout userState={userState} setUserState={setUserState} setErrorMessage={setErrorMessage} />
        <Menu theme={state.theme} dispatch={dispatch} setErrorMessage={setErrorMessage}/>
      </div>
    );
  } else {
    content = <Login setUserState={setUserState} setErrorMessage={setErrorMessage} />;
  }

  return (
    <div className="app">
      <div className={state.theme}>
        <Context.Provider value={[ context, setContext ]}>
          { content }
          { errorMessage && <ErrorMessage errorMessage={errorMessage}/> }
        </Context.Provider>
      </div>
    </div>
  );
}

export default App;
