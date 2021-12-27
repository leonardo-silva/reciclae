import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    header: {
        marginTop: 15,
    },
    content: {
        paddingHorizontal: 1,
        paddingVertical: 10,
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        marginTop: 70
    },
    informationbuttons: {
        alignItems:'center',
        marginTop: 5
    },
    metal: {
        marginTop: -70,
        paddingRight: 150
    },
    glass: {
        paddingLeft: 150
    },
    plastic: {
        marginTop: -70,
        paddingRight: 150
    },
    paper: {
        marginTop: -35,
        paddingLeft: 150
    },
    separation: {
        marginTop: -70,
        paddingRight: 150
    },
    volume: {
        marginTop: -35,
        paddingLeft: 150
    },
    forecast: {
        alignItems:'center',
        marginTop: -17
    }
    
});