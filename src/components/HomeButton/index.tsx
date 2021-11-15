import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text, Image } from "react-native";

import { styles } from "./styles";

import ImgProfile from '../../assets/img-profile.png';
import ImgMaterialRequest from '../../assets/img-material-request.png';
import ImgHistory from '../../assets/img-history.png';
import ImgHelp from '../../assets/img-help.png';

type Props = TouchableOpacityProps & {
    title: string;
    image_id: number;
}

export function HomeButton({ title, image_id, ...rest }: Props) {
    const imgButton = [ImgProfile, ImgMaterialRequest, ImgHistory, ImgHelp][image_id];

    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            <Text style={styles.title}>
                {title}
            </Text>

            <Image source={imgButton} style={styles.icon}/>

        </TouchableOpacity>
    );
}