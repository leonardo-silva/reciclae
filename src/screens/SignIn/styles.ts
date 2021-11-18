import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    header: {
        marginTop: 25
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
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
        marginEnd: 22
    },
    link: {
        color: theme.colors.link,
        fontFamily: theme.fonts.text400,
        fontSize: 13
    },
    newusercontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 33,
    },
})
/**    text: {
        fontSize: 18,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading
    },
 */
