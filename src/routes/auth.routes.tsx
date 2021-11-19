import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
    // Stack of authenticated routes
    return (
        <Navigator>
            <Screen
                name={"Home"}
                component={ Home }
            />    
        </Navigator>
    )
}