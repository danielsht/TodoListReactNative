import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default class Input extends React.Component {
    state = { //set text stat to an empty string
        text: ''
    };

    _OnTextChange = (text) => this.setState({text}); //change state to whatever is being typed

    _onSumbit = () => { //when adding to list 
        const {onSubmitEditing} = this.props;
        const {text} = this.state;

        if (!text) return; //if string is emtpy return nothing 
        
        onSubmitEditing(text); //if not send the text to the addItem function in app,js
        this.setState({text: ''}); //set text to empty 
    };

    render() { //render style and set placeholder and refrenced functions
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