import React from "react";
import { View, Image } from "react-native";

import { styles } from "./styles";

import LogoReciclae from '../../assets/logo-reciclae.png';

export function HeaderIcon() {
    return (
        <View style={styles.container}>
            <View style={styles.circle1}>
                <Image source={LogoReciclae} style={styles.icon}/>
            </View>
            <View style={styles.circle2} />
        </View>
);
}