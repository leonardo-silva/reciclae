import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text, Image } from "react-native";

import { styles } from "./styles";

import ImgMetal from '../../assets/img-metal.png';
import ImgGlass from '../../assets/img-glass.png';
import ImgPlastic from '../../assets/img-plastic.png';
import ImgPaper from '../../assets/img-paper.png';
import ImgSeparation from '../../assets/img-separation.png';
import ImgVolume from '../../assets/img-volume.png';
import ImgForecast from '../../assets/img-forecast.png';


type Props = TouchableOpacityProps & {
    title: string;
    image_id: number;
}

export function InformationButton({ title, image_id, ...rest }: Props) {
    const imgButton = [ImgMetal, ImgGlass, ImgPlastic, ImgPaper, ImgSeparation, ImgVolume, ImgForecast][image_id];

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