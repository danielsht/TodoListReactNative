import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Title extends React.Component {
    render() { //simple render a title component that takes a color for text and uses the children to display the text similar to <Text>
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