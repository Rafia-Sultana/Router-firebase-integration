import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h3>Please login!</h3>
            <div style={{ margin: '10px' }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
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