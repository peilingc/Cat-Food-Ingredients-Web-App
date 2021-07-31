import { endSession } from './services';
import './logout.css';

const Logout = function({ userState, setUserState, setErrorMessage }) {
    const logout = function() {
        setErrorMessage('');
        setUserState({
          ...userState,
          isPending: true,
        });

        endSession()
        .then( () => {
          setUserState({
            isLoggedIn: false,
            isPending: false,
          });
          setErrorMessage('');
        })
        .catch( err => {
          setUserState({
            ...userState,
            isPending: false,
          });
          setErrorMessage(err.error);
        });
    };

    return (
        <div className="logout">
          <label>You are logged in as {userState.username}</label>
          <button className="logout-button" onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default Logout;