import React from 'react';
import Proptypes from 'prop-types';
// auth0
import { useAuth0 } from "../react-auth0-spa";

const Dialog = props => {
    var { userId, handleInput, connectToChatkit } = props;
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

    return (
        <div className="dialog-container">
            <div className="dialog">
                {!isAuthenticated && (
                    <form className="dialog-form" autoFocus>
                        {/* autofocus on the login pop up */}
                        <button autoFocus onClick={loginWithRedirect}>Login</button>
                    </form>
                )}
                {/* requires user is authenticated and assigned a "name" before connecting to chatkit
                
                
                stops people from being able to bypass the log in screen*/}
                {isAuthenticated && user != null && (
                    <form className="dialog-form" autoFocus onFocus={handleInput} onSubmit={connectToChatkit}>
                        <label className="username-label" htmlFor="username">
                            You are logged in as:
                            </label>
                        <input
                            id="username"
                            className="username-input"
                            autoFocus
                            name="userId"
                            value={userId = user.name}
                            readOnly
                        />
                        <button type="submit" className="submit-btn">
                            Click to enter
                            </button>
                    </form>
                )}
            </div>
        </div>
    );
};


/*const Dialog = props => {
    const { userId, handleInput, connectToChatkit } = props;

    return (
        <div className="dialog-container">
            <div className="dialog">
                <form className="dialog-form" onSubmit={connectToChatkit}>
                    <label className="username-label" htmlFor="username">
                        Login with your username
              </label>
                    <input
                        id="username"
                        className="username-input"
                        autoFocus
                        type="text"
                        name="userId"
                        value={userId}
                        onChange={handleInput}
                        placeholder="Enter your username"
                    />
                    <button type="submit" className="submit-btn">
                        Submit
              </button>
                </form>
            </div>
        </div>
    );
};*/

Dialog.propTypes = {
    userId: Proptypes.string,
    handleInput: Proptypes.func.isRequired,
    connectToChatkit: Proptypes.func.isRequired,
}

export default Dialog;