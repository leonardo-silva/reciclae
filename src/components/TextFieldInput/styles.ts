import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    text: {
        fontSize: 16,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading
    },
    required: {
        fontSize: 16,
        fontFamily: theme.fonts.text400,
        color: theme.colors.required,
        textAlignVertical: 'top'
    },
    input: {
        width: 289,
        height: 60,
        top: 8,
        left: -2,
        borderRadius: 28,
        backgroundColor: theme.colors.background,
        paddingHorizontal: 10,  

        shadowColor: theme.colors.shadow,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        shadowRadius: 4.25,
        elevation: 8    
    }
})