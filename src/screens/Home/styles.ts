import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    header: {
        marginTop: 15,
        marginLeft: 25
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
    homebuttons: {
        alignItems:'center',
        marginTop: 5
    },
    request: {
        marginTop: -70,
        paddingRight: 150
    },
    help: {
        marginTop: -70,
        paddingRight: 150
    },
    profile: {
        paddingLeft: 150
    },
    history: {
        marginTop: -35,
        paddingLeft: 150
    }
});