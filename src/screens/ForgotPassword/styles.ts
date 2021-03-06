import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    header: {
        marginTop: 25,
    },
    content: {
        paddingHorizontal: 1,
        paddingVertical: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        marginTop: 34
    },
    textcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    text: {
        fontSize: 16,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
        textAlign: 'center',
    },
    form: {
        width: '100%',
        paddingVertical: 46,
        paddingHorizontal: 46,
    },
})
