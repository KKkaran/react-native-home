import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({src, title, score}) => {
    //console.log(src)
    return <View>
        <Image source={src} />
        <Text>{title} {score}</Text>
    </View>
}

const styles = StyleSheet.create({

})

export default ImageDetail;