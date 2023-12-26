import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from "../components/ImageDetail";

const CSSScreen = () => {
    return <View style={styles.parent}>
            <Text style={styles.textA}></Text>
            <Text style={styles.textB}></Text>
            <Text style={styles.textC}></Text>
       </View>
}

const styles = StyleSheet.create({

    parent:{
        flexDirection:'row',
        height:150,
        alignItems:'flex-start',
        borderColor: 'purple',
        borderWidth:3,
        justifyContent:'space-between'
    },
    textA:{
        borderWidth: 2,
        borderColor:'red',
        backgroundColor:'red',
        color:'white',
        height:75,
        width:40
    },
    textB:{
        borderWidth: 2,
        borderColor:'blue',
        backgroundColor:'blue',
        color:'white',
        height:75,
        alignSelf:'flex-end',
        width:75
    },
    textC:{
        borderWidth: 2,
        borderColor:'green',
        backgroundColor:'green',
        color:'white',
        height:75,
        width:40
    }
})

export default CSSScreen;