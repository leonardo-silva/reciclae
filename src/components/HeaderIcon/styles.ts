import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginRight: 15,
        marginLeft: 15
    },
    leftCorner: {
        flexDirection: 'row',
    },
    profile: {
        width: '100%',
        alignItems: 'center',
    },
    circle1: {
        backgroundColor: theme.colors.primary,
        width: 85,
        height: 85,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    circle2: {
        backgroundColor: theme.colors.primary,
        width: 70,
        height: 70,
        borderRadius: 50,
        marginTop: 25,
        marginLeft: -35,
        zIndex: 0
    },
    icon: {
        width: 85,
        height: 85,
        marginBottom: 5
    }
})