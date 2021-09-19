import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    header: {
        marginTop: 25,
        marginLeft: 25
    },
    content: {
        paddingHorizontal: 1,
        paddingVertical: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    spaceBetweenFields: {
        marginTop: 30
    },
    form: {
        paddingVertical: 40,
        paddingHorizontal: 40
    },
    button: {
        alignItems: 'center',
        marginTop: 34
    },
    text: {
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
        marginEnd: 22
    },
})