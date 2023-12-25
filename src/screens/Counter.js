import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import { FlatList } from "react-native-gesture-handler";

const INCREMENT_COUNTER = 10;
const reducer = (state, {type, payload}) => {
    switch (type) {
        case "increment":
            return {...state, count:state.count + payload}
        case "decrement":                                                               
            return {...state, count:state.count - payload}
        default:
            return state
    }
}

const Counter = () => {
    //console.log(src)
    const [counter, dispatch] = useReducer(reducer, { count: 0 })
    const { count } = counter;
    const [name, setName] = useState("");
    const [colors, setColor] = useState([]);
    return <View>
        <Button
            title="Increment"
            onPress={() => {
                console.log("increment")
                dispatch({type:'increment', payload: INCREMENT_COUNTER})
            }} />
        <Button
            title="Decrement"
            onPress={() => {
                console.log("decrement")
                dispatch({type:'decrement', payload: INCREMENT_COUNTER})

            }} />
        <Text style={styles.text}>Current Count:{count}</Text>
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