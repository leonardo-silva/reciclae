import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android        
        borderRadius: 28,
        width: 133,
        height: 135,
        backgroundColor: theme.colors.primary,
        color: theme.colors.heading,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: theme.fonts.text400,
        fontSize: 17,
        color: theme.colors.heading,
        marginBottom: 10
    },
    icon: {
        width: 50,
        height: 50
    }
})