import React from "react";
import { View, Alert, ScrollView, Text } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { BackForm } from "../../components/BackForm";
import { SmallButton } from "../../components/SmallButton";
import { HeaderIcon } from "../../components/HeaderIcon";
import { TextFieldInput } from "../../components/TextFieldInput";
import { strings } from "../../global/strings/strings";
import { consts } from "../../global/consts/consts";
import { theme } from "../../global/styles/theme";

import IconInterrogation from '../../assets/img-interrogation.png';
import { styles } from "./styles";

type RootStackParamList = {
    ForgotPassword: undefined;
    SignUp: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

export function CollectionRequest({ navigation }: Props) {
    const { question } = strings.form;
    const { doNotKnow } = strings.form;
    const { primary } = theme.colors;
    const [confirm, onChangeConfirm] = React.useState("");
    const [deny, onChangeDeny] = React.useState("");

    return (
        <ScrollView style={styles.container}>
        <View style={styles.header}>
            <HeaderIcon />
        </View>
        <BackForm>
            <View style={styles.rectangle}>
                <View style={styles.form}>
                    <Text style={styles.text}>
                        {strings.form.question}    
                    </Text>
                </View>
            </View>
            <View style={styles.button1}>
                <SmallButton 
                    title={strings.smallButton.yes} 
                    onPress={() => Alert.alert(confirm)}
                />
            </View>
            <View style={styles.button2}>
                <SmallButton 
                    title={strings.smallButton.no} 
                    onPress={() => Alert.alert(deny)}
                />
            </View>
            <View style={styles.form}>
                    <Text style={styles.text}>
                        {strings.form.doNotKnow}    
                    </Text>
            </View>
            <View style={styles.icon}>
                        <IconInterrogation
                            image_id={0}
                            onPress={() => Alert.alert("Botao Interrogacao")}
                        />
                    </View>

        </BackForm>
    </ScrollView> 
    );
}