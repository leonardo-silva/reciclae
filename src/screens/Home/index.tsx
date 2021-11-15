import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Alert } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { strings } from "../../global/strings/strings";

import { HeaderIcon } from "../../components/HeaderIcon";
import { BasicButton } from "../../components/BasicButton";
import { HomeButton } from "../../components/HomeButton";

export function Home() {
    const { primary, secondary, background } = theme.colors;

    return (
        <LinearGradient
            style={styles.container}
            locations={[0.2, 0.4, 0.6, 0.8]}
            colors={[background, secondary, primary, background]}
        >
            <View style={styles.header}>
                <HeaderIcon />
            </View>
            <View style={styles.content}>
                <View style={styles.homebuttons}>
                    <View style={styles.profile}>
                        <HomeButton
                            title={strings.homeButton.profile}
                            image_id={0}
                            onPress={() => Alert.alert("Botao Perfil")}
                        />
                    </View>
                    <View style={styles.request}>
                        <HomeButton
                            title={strings.homeButton.request}
                            image_id={1}
                            onPress={() => Alert.alert("Botao Pedido de Coleta")}
                        />
                    </View>
                </View>
                <View style={styles.button}>
                    <BasicButton
                        title={strings.basicButton.exit}
                        onPress={() => Alert.alert("Botao Sair")}
                    />
                </View>
            </View>
        </LinearGradient>
    );
}