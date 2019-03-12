import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Title extends React.Component {
    render() {
        const {children, color} = this.props;
        return (
            <View style={styles.container}>
                <Text style={{color}}>{children}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9FC9EB',
        width: '100%',
        alignItems: 'center',
        justifyContent:'center'
    },
});