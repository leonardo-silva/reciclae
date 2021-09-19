import React from "react";
import { View, Alert } from "react-native";

import { BackForm } from "../../components/BackForm";
import { BasicButton } from "../../components/BasicButton";
import { HeaderIcon } from "../../components/HeaderIcon";
import { TextFieldInput } from "../../components/TextFieldInput";
import { strings } from "../../global/strings/strings";
import { consts } from "../../global/consts/consts";

import { styles } from "./styles";

export function SignUp() {
    const [name, onChangeName] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [confirmPwd, onChangeConfirmPwd] = React.useState("");
    const { lblName, lblEmail, lblPassword, lblConfirmPwd } = strings.form;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderIcon />
            </View>
            <View style={styles.content}>
                <BackForm>
                    <View style={styles.form}>
                        <TextFieldInput 
                            title={lblName}
                            keyboardType='default'
                            onChangeText={onChangeName}
                            required
                        />
                        <View style={styles.spaceBetweenFields}/>
                        <TextFieldInput 
                            title={lblEmail}
                            keyboardType='email-address'
                            onChangeText={onChangeEmail}
                            required
                        />
                        <View style={styles.spaceBetweenFields} />
                        <TextFieldInput 
                            title={lblPassword}
                            keyboardType='default'
                            onChangeText={onChangePassword}
                            maxLength={consts.PASSWORD_MAXLENGTH}
                            secureTextEntry
                            required
                        />
                        <View style={styles.spaceBetweenFields} />
                        <TextFieldInput 
                            title={lblConfirmPwd}
                            keyboardType='default'
                            onChangeText={onChangeConfirmPwd}
                            maxLength={consts.PASSWORD_MAXLENGTH}
                            secureTextEntry
                            required
                        />
                        <View style={styles.button}>
                            <BasicButton 
                                title={strings.basicButton.save} 
                                onPress={() => Alert.alert(password)}
                            />
                        </View>
                    </View>
                </BackForm>
            </View>
        </View>    
    );
}