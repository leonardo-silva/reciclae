import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { ForgotPassword } from "../screens/ForgotPassword";

const { Navigator, Screen } = createNativeStackNavigator();

export function NoAuthRoutes() {
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
            <Screen
                name="ForgotPassword"
                component= { ForgotPassword }
            />    
        </Navigator>
    );
}