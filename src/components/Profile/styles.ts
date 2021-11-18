import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    user: {
        flexDirection: 'column',
        paddingRight: 5
    },
    greeting: {
        fontFamily: theme.fonts.text400,
        fontSize: 15,
        color: theme.colors.heading,
    },
    username: {
        fontFamily: theme.fonts.text400,
        fontSize: 15,
        color: theme.colors.heading
    },
    message: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.secondary
    }
});