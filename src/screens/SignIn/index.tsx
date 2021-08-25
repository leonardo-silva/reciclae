import React from "react";
import { View, Text } from "react-native";

import { BackForm } from "../../components/BackForm";
import { HeaderIcon } from "../../components/HeaderIcon";
import { TextFieldInput } from "../../components/TextFieldInput";
import { strings } from "../../global/strings/strings";

import { styles } from "./styles";

export function SignIn() {
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const { lblEmail, lblPassword } = strings.form;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderIcon />
            </View>
            <View style={styles.content}>
                <BackForm>
                    <View style={styles.form}>
                        <TextFieldInput 
                            title={lblEmail}
                            keyboardType='email-address'
                            onChangeText={onChangeEmail}
                            required
                        />
                        <View style={{ marginTop: 30 }} />
                        <TextFieldInput 
                            title={lblPassword}
                            keyboardType='default'
                            onChangeText={onChangePassword}
                            maxLength={8}
                            secureTextEntry
                            required
                        />
                    </View>
                </BackForm>
            </View>
</View>
    );
}