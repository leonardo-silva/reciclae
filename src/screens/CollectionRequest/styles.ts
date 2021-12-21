import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    header: {
        marginTop: 20,
    },
    content: {
        paddingHorizontal: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    spaceBetweenFields: {
        marginTop: 20
    },
    form: {
        marginTop: 20,
        paddingHorizontal: 40
    },
    button1: {
        alignItems: 'center',
        marginTop: 40,
        left: 78,
        top: 421
    },
    button2: {
        alignItems: 'center',
        marginTop: 40,
        left: 222,
        top: 421
    },
    text: {
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
        marginEnd: 22
    },
    icon: {
        width: 50,
        height: 50,
        left: 183,
        top: 599
    },

    rectangle: {
        alignItems: 'center',
        width: 317,
        height: 145,
        left: 48,
        top: 236,
        borderRadius: 40,
        shadowColor: 'rgba(0,0,0, .4)'
    }
})