import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & {
    title: string;
    keyboardType: string;
    onChangeText: Function;
    required: boolean
}

export function TextFieldInput({ title, 
        keyboardType, onChangeText, required, ...rest }: Props) {
    return (
        <View>
            <Text style={styles.required}>
                <Text style={styles.text}>{title}</Text> {required ? `*` : ` `}
            </Text>
            <TextInput
                style={styles.input}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                {...rest}
            />
        </View>
    );
}
/*
            if (mandatory) <Text style={{fontSize:20 * 1.6, lineHeight:22 * 1.1, textAlignVertical: 'top'}}>
    *
  </Text>
*/