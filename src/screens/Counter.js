import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import { FlatList } from "react-native-gesture-handler";

const Counter = () => {
    //console.log(src)
    let [counter, setCounter] = useState(0);
    const [name, setName] = useState("");
    const [colors, setColor] = useState([]);
    return <View>
        <Button
            title="Increment"
            onPress={() => {
                setCounter(++counter)
                console.log(counter)
                if (counter >= 10) {
                    setName("Karan")
                } 
            }} />
        <Button
            title="Decrement"
            onPress={() => {
                setCounter(--counter);
                console.log(counter)
                if(counter < 10) {
                    setName("")
                }
            }} />
        <Text style={styles.text}>Current Count: {counter}</Text>
        <Text style={styles.text}>{name}</Text>
        <Button
            title="Add Color"
            onPress={() => {
                console.log("color added", colors)
                setColor([...colors, randomRGB()])
            }} />
        <FlatList
            keyExtractor={(item)=>item}
            data={colors}
            renderItem={({item}) => {
                return <View style={{ height: 100, width: 100, backgroundColor:item}} />

            }}
        />
    </View>
}

const randomRGB = () => {
    const red = Math.floor(Math.random() * 266)
    const green = Math.floor(Math.random() * 266)
    const blue = Math.floor(Math.random() * 266)

    return `rgb(${red}, ${blue},${green})`
}

const styles = StyleSheet.create({
    text: {
        fontSize:25
    }
})

export default Counter;