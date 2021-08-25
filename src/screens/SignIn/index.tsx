import React from "react";
import { View, Text } from "react-native";

import { BackForm } from "../../components/BackForm";
import { HeaderIcon } from "../../components/HeaderIcon";
import { strings } from "../../global/strings/strings";

import { styles } from "./styles";

export function SignIn() {
    const { email } = strings.form;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderIcon />
            </View>
            <View style={styles.content}>
                <BackForm>
                    <View style={styles.form}>
                        <Text style={styles.text}>{email}</Text>
                    </View>
                </BackForm>
            </View>
</View>
    );
}