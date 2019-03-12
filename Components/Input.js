import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default class Input extends React.Component {
    state = {
        text: ''
    };

    _OnTextChange = (text) => this.setState({text});

    _onSumbit = () => {
        const {onSubmitEditing} = this.props;
        const {text} = this.state;

        if (!text) return;
        
        onSubmitEditing(text);
        this.setState({text: ''});
    };

    render() {
        const {placeHolder} = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput onChangeText={this._OnTextChange} onSubmitEditing={this._onSumbit} value={this.state.text} placeholder={placeHolder} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    inputContainer: {
        
        height: 15,
        width: '95%',
    }
});