import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
    const secondEle = "My name is Karan Sodhi";
    return <View>
        <Text style={styles.textStyle}>Getting Started with React Native!</Text>
        <Text style={{fontSize:20}}>{secondEle}</Text>
    </View> 
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45 
    }
});

export default ComponentScreen;