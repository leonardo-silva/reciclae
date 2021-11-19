import React from "react";
import { View, Text, Alert, ScrollView } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";

import { BasicButton } from "../../components/BasicButton";
import { HeaderIcon } from "../../components/HeaderIcon";
import { TextFieldInput } from "../../components/TextFieldInput";
import { strings } from "../../global/strings/strings";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type RootStackParamList = {
    ForgotPassword: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

export function ForgotPassword({ navigation }: Props) {
    const [email, onChangeEmail] = React.useState("");
    const {lblEmail} = strings.form;
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
                <View style={styles.textcontainer}>
                    <Text style={styles.text}>
                        {strings.basicScreen.lblEmailPwd}    
                    </Text>
                </View>
                <View style={styles.form}>
                    <TextFieldInput 
                        title={lblEmail}
                        keyboardType='email-address'
                        onChangeText={onChangeEmail}
                        required
                    />
                </View>    
                <View style={styles.button}>
                    <BasicButton
                        title={strings.basicButton.send}
                        onPress={() => Alert.alert(email)}
                    />
                </View>
            </View>
        </LinearGradient>         
    );
}