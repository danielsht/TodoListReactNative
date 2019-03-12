import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Footer extends React.Component {
    render() {
        const {onClearItems} = this.props
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => onClearItems()}>
                    <View style={styles.button}>
                        <Text style={styles.fontStuff}>Remove completed items</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    button: {
        height: '100%',
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fontStuff: {
        color: 'red',
    }
});