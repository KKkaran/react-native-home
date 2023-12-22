import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
 // console.log(props)
  return (
    <View>
      <Button
        title="Go to Component Screen"
        onPress={() => {
          navigation.navigate("Components")
          console.log("going to component screen")
        }
        } />
      <Button
        title="Go to List Screen"
        onPress={() => {
          navigation.navigate("ListScreen");
          console.log("going to list screen")
        }} />
      <Button
        title="Go to Image Screen"
        onPress={() => {
          navigation.navigate("ImageScreen");
          console.log("going to list screen")
        }} />
      <Button
        title="Go to Counter Screen"
        onPress={() => {
          navigation.navigate("CounterScreen");
          console.log("going to counter screen")
        }} />
      {/* <TouchableOpacity onPress={()=> console.log("list clicked")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>  
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
