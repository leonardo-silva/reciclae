import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 28,
        width: 135,
        height: 137,
        backgroundColor: theme.colors.primary,
        color: theme.colors.heading,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: theme.fonts.text400,
        fontSize: 18,
        color: theme.colors.heading,
        marginBottom: 13
    },
    icon: {
        width: 50,
        height: 50
    }
})