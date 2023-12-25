import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const NameInputScreen = () => {
    const [name, setName] = useState('')
    return <View>
        <Text style={styles.heading}>Password:</Text>
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newName) => {
                setName(newName)
            }}
            style={styles.textStyle} />
        {name.length < 5 ? <Text style={styles.error}>Your password must be atleast 5 characters long.</Text> : null}
    </View> 
}

const styles = StyleSheet.create({
    textStyle: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 2,
        height:30
    },
    heading: {
        marginLeft: 10,
        fontSize: 35,
        fontWeight: "bold"
    },
    error: {
        marginLeft: 10,
        color:'red'
    }
});

export default NameInputScreen;