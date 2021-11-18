import React from "react";
import { View, Text } from "react-native";

import { Avatar } from "../Avatar";

import { useAuth } from "../../hooks/auth";
import { styles } from "./styles";
import { strings } from "../../global/strings/strings";

export function Profile() {
    const { user } = useAuth();

    return(
        <View style={styles.container}>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        {strings.avatar.greeting},
                    </Text>

                    <Text style={styles.username}>
                        {user.firstName}
                    </Text>
                </View>
            </View>
            <Avatar urlImage={user.avatar}/>

        </View>

    );
}