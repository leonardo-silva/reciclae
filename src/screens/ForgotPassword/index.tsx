import React from "react";
import { View, Text, Alert, ScrollView } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { BackForm } from "../../components/BackForm";
import { BasicButton } from "../../components/BasicButton";
import { HeaderIcon } from "../../components/HeaderIcon";
import { TextFieldInput } from "../../components/TextFieldInput";
import { strings } from "../../global/strings/strings";
import { consts } from "../../global/consts/consts";
import { styles } from "./styles";

type RootStackParamList = {
    ForgotPassword: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;



export function ForgotPassword({ navigation }: Props) {
    const[email, onChangeEmail] = React.useState("");
    const{lblEmailPwd, lblEmail} = strings.form;


    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <HeaderIcon />
            </View>
            <View style={styles.content}>
                <BackForm>
                    <View style={styles.textcontainer}>
                       <Text style={styles.text}>
                            {strings.form.lblEmailPwd}                        
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
                </BackForm>
            </View>
        </ScrollView>                
    );
}