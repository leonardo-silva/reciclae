import React from "react";
import { View, Text, Alert, ScrollView, ActivityIndicator } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { BackForm } from "../../components/BackForm";
import { BasicButton } from "../../components/BasicButton";
import { HeaderIcon } from "../../components/HeaderIcon";
import { TextFieldInput } from "../../components/TextFieldInput";

import { consts } from "../../global/consts/consts";
import { strings } from "../../global/strings/strings";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { useAuth } from "../../hooks/auth";

// To type check our route name and params, we need to create an object type with mappings for route name 
// to the params of the route.
// Specifying  undefined  means that the route doesn't have params. 
// A union type with  undefined  (e.g. SomeType | undefined)  means that params are optional.
// Ref: https://reactnavigation.org/docs/typescript/

type RootStackParamList = {
    ForgotPassword: undefined;
    SignUp: undefined;
};



type Props = NativeStackScreenProps<RootStackParamList>;

export function SignIn({ navigation }: Props) {
    const { loading, signIn } = useAuth();
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const { lblEmail, lblPassword } = strings.form;

    async function handleSignIn() {
        try {
            await signIn();
        } catch (error) {
            Alert.alert(error as string);
        }
    }

    return (
        <ScrollView style={styles.container}>
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
                                <Text
                                    style={styles.link}
                                    onPress={() => { navigation.navigate('ForgotPassword') }}
                                >
                                    {` ${strings.form.lblClickHere}`}
                                </Text>
                            </Text>
                        </View>
                        <View style={styles.button}>
                            {
                                loading 
                                    ? <ActivityIndicator 
                                        color={theme.colors.primary} /> 
                                    : <BasicButton 
                                        title={strings.basicButton.title} 
                                        onPress={handleSignIn}
                                    />
                            }
                        </View>
                        <View style={styles.newusercontainer}>
                            <Text style={styles.text}>
                                {strings.form.lblNewUser}
                                <Text 
                                    style={styles.link}
                                    onPress={() => { navigation.navigate('SignUp') }}
                                >    
                                    {` ${strings.form.lblClickHere}`}
                                </Text>
                            </Text>
                        </View>
                    </View>
                </BackForm>
            </View>
        </ScrollView>
    );
}
