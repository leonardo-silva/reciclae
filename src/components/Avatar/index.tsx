import React from "react";
import { Image, View } from "react-native";

import { styles } from "./styles";

type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props) {
    return(
        <View style={styles.container}>
            <Image 
                source={{ uri: urlImage }}
                style={styles.avatar}
            />
        </View>    
    );
}
