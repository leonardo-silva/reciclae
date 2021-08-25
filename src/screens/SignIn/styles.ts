import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    header: {
        marginTop: 65,
        marginLeft: 25
    },
    content: {
        paddingHorizontal: 1,
        paddingVertical: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        paddingVertical: 46,
        paddingHorizontal: 46
    },
    text: {
        fontSize: 18,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading
    }
})
