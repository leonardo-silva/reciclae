import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Alert } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { strings } from "../../global/strings/strings";
import { useAuth } from "../../hooks/auth";

import { HeaderIcon } from "../../components/HeaderIcon";
import { BasicButton } from "../../components/BasicButton";
import { HomeButton } from "../../components/HomeButton";

export function Home() {
    const { signOut } = useAuth();
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
                <View style={styles.informationbuttons}>
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
                    <View style={styles.history}>
                        <HomeButton
                            title={strings.homeButton.history}
                            image_id={2}
                            onPress={() => Alert.alert("Botao Histórico de Coleta")}
                        />
                    </View>
                    <View style={styles.help}>
                        <HomeButton
                            title={strings.homeButton.help}
                            image_id={3}
                            onPress={() => Alert.alert("Botao Ajuda")}
                        />
                    </View>
                </View>
                <View style={styles.button}>
                    <BasicButton
                        title={strings.basicButton.endSession}
                        onPress={signOut}
                    />
                </View>
            </View>
        </LinearGradient>
    );
}