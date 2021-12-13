import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { strings } from '../global/strings/strings';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
    // Stack of authenticated routes
    return (
        <Navigator>
            <Screen
                name={"Home"}
                component={ Home }
                options={ {title: strings.screenTitles.home} }
            />    
        </Navigator>
    )
}