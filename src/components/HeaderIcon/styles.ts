import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    circle1: {
        backgroundColor: theme.colors.primary,
        width: 90,
        height: 90,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    circle2: {
        backgroundColor: theme.colors.primary,
        width: 75,
        height: 75,
        borderRadius: 50,
        marginTop: 25,
        marginLeft: -35,
        zIndex: 0
    },
    icon: {
        width: 90,
        height: 90,
        marginBottom: 5
    }
})