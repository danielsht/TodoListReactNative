import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Checkbox from './Checkbox'


export default class List extends React.Component {
    renderItem = (item, i) => { //render list item passed to it by map.() and give it a checkbox component 
        const {onPressItem} = this.props
        return (
            <View key={i} style={styles.listItem}>
                <Text>{item.doThis}</Text>
                <Checkbox item={item} i={i} onPressItem={onPressItem} />
            </View>
        )
    };
    
    render() { //use Array.map() to send all the list items to be displayed individually 
        const {list} = this.props;
        return (
            <View style={styles.container}>
                {list.map(this.renderItem)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    listItem: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});