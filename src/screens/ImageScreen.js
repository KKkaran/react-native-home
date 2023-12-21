import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return <View>
            <ImageDetail
                title="beach"
                src={require("../../assets/beach.jpg")}
                score={10} />
            <ImageDetail
                title="forest"
                src={require("../../assets/mountain.jpg")}
                score={5} />
            <ImageDetail
                title="mountain"
                src={require("../../assets/forest.jpg")}
                score={8} />
       </View>
}

const styles = StyleSheet.create({

})

export default ImageScreen;