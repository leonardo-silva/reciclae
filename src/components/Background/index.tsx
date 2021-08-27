import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
    children: ReactNode;
}

export function Background({ children }: Props) {
    // Avoids the need to write the prefix of theme.colors.secondary80 and 
    // theme.colors.secondary100 all the time
    const { primary, background } = theme.colors;

    return (
        <LinearGradient
            style={styles.container}
            colors={[primary, background]}
        >
            {children}
        </LinearGradient>    
    );    
}