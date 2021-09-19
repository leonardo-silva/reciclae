import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator>
            <Screen
                name="SignIn"
                component={ SignIn }
            />    
            <Screen
                name="SignUp"
                component={ SignUp }
            />    
        </Navigator>
    );
}