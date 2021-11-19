import React from "react";
import { View, Image } from "react-native";

import { styles } from "./styles";
import { useAuth } from "../../hooks/auth";
import { Profile } from "../Profile";

import LogoReciclae from '../../assets/logo-reciclae.png';

export function HeaderIcon() {
    const { user } = useAuth();

    return (
        <View style={styles.container}>
            <View style={styles.leftCorner}>
                <View style={styles.circle1}>
                    <Image source={LogoReciclae} style={styles.icon}/>
                </View>
                <View style={styles.circle2} />
            </View>
            { 
                user.email 
                ? <View style={styles.profile}><Profile /></View> 
                : <View />
            }
        </View>
    );
}