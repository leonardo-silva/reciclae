import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { NoAuthRoutes } from './noauth.routes';
import { AuthRoutes } from './auth.routes';
import { useAuth } from "../hooks/auth";

export function Routes() {
    const { user } = useAuth();

    return (
        <NavigationContainer>
            { user.email ? <AuthRoutes /> : <NoAuthRoutes /> }
        </NavigationContainer>
    );
}