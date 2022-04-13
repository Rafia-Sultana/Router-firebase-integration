import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import app from '../../firebase.init'
const auth = getAuth(app);
const Login = () => {

    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div>
            <h3>Please login!</h3>
            <div style={{ margin: '10px' }}>
                <button onClick={() => signInWithGoogle()}>Google Sign In</button>
            </div>
            <form action="">
                <br />
                <input type="email" placeholder='your email' />
                <br />
                <input type="password" placeholder='your password' />
                <br />
                <input type="submit" value="LogIn" />
            </form>
        </div>
    );
};

export default Login;