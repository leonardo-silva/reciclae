import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 28,
        width: 115,
        height: 53,
        backgroundColor: theme.colors.heading,
        color: theme.colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: theme.fonts.text400,
        fontSize: 18,
        color: theme.colors.background
    }
})