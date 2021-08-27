import React from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";

import { BackForm } from "../../components/BackForm";
import { BasicButton } from "../../components/BasicButton";
import { HeaderIcon } from "../../components/HeaderIcon";
import { TextFieldInput } from "../../components/TextFieldInput";
import { consts } from "../../global/consts/consts";
import { strings } from "../../global/strings/strings";
import { theme } from "../../global/styles/theme";

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
                            maxLength={consts.PASSWORD_MAXLENGTH}
                            secureTextEntry
                            required
                        />
                        <View style={styles.textcontainer}>
                            <Text style={styles.text}>
                                {strings.form.lblForgotPwd}
                                <Text style={styles.link}>{` ${strings.form.lblClickHere}`}</Text>
                            </Text>
                        </View>
                        <View style={styles.button}>
                            <BasicButton 
                                title={strings.basicButton.title} 
                                onPress={() => Alert.alert(password)}
                            />
                        </View>
                        <View style={styles.newusercontainer}>
                            <Text style={styles.text}>
                                {strings.form.lblNewUser}
                                <Text style={styles.link}>{` ${strings.form.lblClickHere}`}</Text>
                            </Text>
                        </View>
                    </View>
                </BackForm>
            </View>
</View>
    );
}