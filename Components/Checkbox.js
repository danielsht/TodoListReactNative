import React from 'react'
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native'

export default class Checkbox extends React.Component {

    ifRemove = (rem) => { // check to see if an item is slated for removal then add a box inside the current box if true 
        if(rem) {
            return (
                <View style={styles.innerBox}></View>
            );
        }
    };

    render() { //render a touchable box and check to see if slated for removal and calls ifPressed function in App.js when pressed 
        const {onPressItem, item, i} = this.props
        return (
            <TouchableWithoutFeedback key={i} onPress={() => onPressItem(i)}>
                <View style={styles.outerBox}>
                    {this.ifRemove(item.remove)}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    outerBox: {
        width: 20,
        height: 20,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerBox: {
        width: 15,
        height: 15,
        backgroundColor:'black',
    },
});