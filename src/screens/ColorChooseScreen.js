import { useState } from "react";
import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorChooseScreen = () => {
    const [colorss, setColorss] = useState({
        red: 255,
        green: 255,
        blue:255
    });

    return <View>
        <Text style={styles.textStyle}></Text>
        <Button
            title="More RED"
            onPress={() => {
                console.log("more red")
                setColorss(prevState => ({
                    ...prevState,
                    'red': colorss["red"] + 20
                }));
                console.log("color now", colorss)
            }} />
        <Button
            title="Less RED"
            onPress={() => {
                console.log("less red")
                setColorss(prevState => ({
                    ...prevState,
                    'red': colorss["red"] - 20
                }));
                console.log("color now", colorss)
            }} />
        
        <Text style={styles.textStyle}></Text>
        <Button
            title="More GREEN"
            onPress={() => {
                console.log("more green")
                setColorss(prevState => ({
                    ...prevState,
                    'green': ++colorss["green"] + 20
                }));
                console.log("color now", colorss)
            }} />
        <Button
            title="Less GREEN"
            onPress={() => {
                console.log("less green")
                setColorss(prevState => ({
                    ...prevState,
                    'green': --colorss["green"] - 20
                }));
                console.log("color now", colorss)
            }} />
        
        <Text style={styles.textStyle}></Text>
        <Button
            title="More BLUE"
            onPress={() => {
                console.log("more blue")
                setColorss(prevState => ({
                    ...prevState,
                    'blue': ++colorss["blue"] + 20
                }));
                console.log("color now", colorss)
            }} />
        <Button
            title="Less BLUE"
            onPress={() => {
                console.log("less blue")
                setColorss(prevState => ({
                    ...prevState,
                    'blue': --colorss["blue"] - 20
                }));
                console.log("color now", colorss)
            }} />
        <Text style={{backgroundColor: `rgb(${colorss['red']}, ${colorss['blue']},${colorss['green']})`}}>SS</Text>
    </View> 
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15 
    }
});

export default ColorChooseScreen;