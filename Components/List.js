import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Checkbox from './Checkbox'


export default class List extends React.Component {
    renderItem = (item, i) => {
        const {onPressItem} = this.props
        return (
            <View style={styles.listItem}>
                <Text key={i}>{item.doThis}</Text>
                <Checkbox item={item} i={i} onPressItem={onPressItem} />
            </View>
        )
    };
    
    render() {
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