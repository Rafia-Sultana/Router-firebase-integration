import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
const auth = getAuth(app);

const Product = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <p>{user ? user.displayName : 'No One'}</p>
        </div>
    );
};

export default Product;