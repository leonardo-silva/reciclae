import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Alert } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { strings } from "../../global/strings/strings";
import { useAuth } from "../../hooks/auth";

import { HeaderIcon } from "../../components/HeaderIcon";
import { InformationButton } from "../../components/InformationButton";

export function Information() {
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
                    <View style={styles.metal}>
                        <InformationButton
                            title={strings.informationButton.metal}
                            image_id={0}
                            onPress={() => Alert.alert("Botao sobre Metal")}
                        />
                    </View>    
                    <View style={styles.glass}>
                        <InformationButton
                            title={strings.informationButton.glass}
                            image_id={1}
                            onPress={() => Alert.alert("Botao sobre Vidro")}
                        />
                    </View>
                    <View style={styles.plastic}>
                        <InformationButton
                            title={strings.informationButton.plastic}
                            image_id={2}
                            onPress={() => Alert.alert("Botao de Plastico")}
                        />
                    </View>
                    <View style={styles.paper}>
                        <InformationButton
                            title={strings.informationButton.paper}
                            image_id={3}
                            onPress={() => Alert.alert("Botao de Papel")}
                        />
                    </View>
                    <View style={styles.separation}>
                        <InformationButton
                            title={strings.informationButton.separation}
                            image_id={4}
                            onPress={() => Alert.alert("Botao de Como separar os materiais")}
                        />
                    </View>
                    <View style={styles.volume}>
                        <InformationButton
                            title={strings.informationButton.volume}
                            image_id={5}
                            onPress={() => Alert.alert("Botao de Volume minimo para coleta")}
                        />
                    </View>
                    <View style={styles.forecast}>
                        <InformationButton
                            title={strings.informationButton.forecast}
                            image_id={6}
                            onPress={() => Alert.alert("Botao de Previsão de coleta")}
                        />
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}