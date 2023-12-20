import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {

    const friends = [
        { name: "Friend #1", age: 23 },
        { name: "Friend #2", age: 24 },
        { name: "Friend #3", age: 21 },
        { name: "Friend #4", age: 19 },
        { name: "Friend #5", age: 25 },
        { name: "Friend #6", age: 18 },
        { name: "Friend #7", age: 17 },
        { name: "Friend #8", age: 27 },
        { name: "Friend #9", age: 23 },
    ]

    return <FlatList
        //horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={friend=>friend.name}
        data={friends}
        renderItem={({item, index}) => { 
            return (
                <Text style={styles.textStyle}>
                    {index + 1}. {item.name} is {item.age} years old.
                </Text>)
        }}>
        </FlatList>
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;