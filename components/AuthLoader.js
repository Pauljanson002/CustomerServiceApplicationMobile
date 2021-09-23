import React, { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

import Loader from '../components/Loader';

const AuthLoader = props => {
    const checkLoginState = async () => {
        // retrieve the value of the token
        const userToken = await SecureStore.getItemAsync('token');
        // navigate to the app screen if a token is present
        // else navigate to the auth screen
        props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // call checkLoginState as soon as the component mounts
    useEffect(() => {
        // checkLoginState();
    });

    return <Loader/>;
};

export default AuthLoader;