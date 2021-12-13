import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { ForgotPassword } from "../screens/ForgotPassword";
import { strings } from "../global/strings/strings";

const { Navigator, Screen, Group } = createNativeStackNavigator();

export function NoAuthRoutes() {
    const titles = strings.screenTitles;

    return (
        <Navigator>
            <Group
                screenOptions={{ headerTitleAlign: 'center' } }
            >            
                <Screen
                    name="SignIn"
                    component={ SignIn }
                    options={ {title: titles.signIn} }
                />    
                <Screen
                    name="SignUp"
                    component={ SignUp }
                    options={ {title: titles.signUp} }
                />
                <Screen
                    name="ForgotPassword"
                    component= { ForgotPassword }
                    options={ {title: titles.forgotPassword} }
                />    
            </Group>
        </Navigator>
    );
}