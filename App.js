//import libraries/framework and other app components
import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import Title from './Components/Title';
import List from './Components/List';
import Footer from './Components/Footer';
import Input from './Components/Input';

export default class App extends React.Component {
  //set defualt state to an array
  state = {
    todos: [],
  }

  addItem = (item) => { //add item to list function 
    const {todos} = this.state;
    const newItem = Object.assign(todos, {doThis: item, remove: false}) //create a new object that hold the todo item and boolean whether it has been completed
    this.setState({todos: [newItem, ...todos]});
  };

  removeItems = () => { //remove items from list 
    const {todos} = this.state;
    this.setState({
      todos: todos.filter((item, i) => item.remove === false)
    }); //filter array and keep anything that is not marked for removal
  }

  ifPressed = (index) => { //change an item has been completed or not  
    const {todos} = this.state
    const newState = Object.assign({}, this.state) //copy current state into an object 
    newState.todos[index].remove = !newState.todos[index].remove //modify the value that has been clicked to the opposite of what the boolean was so true now becomes false an vice versa 
    this.setState({newState});  
  }

  render() { //render to screen all necessary components, pass state and refrence to functions when needed by components
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.headerContainer}>
          <Title color={"white"}>Todo List</Title>
        </SafeAreaView>
        <View style={styles.listContainer}>
          <Input onSubmitEditing={this.addItem} placeHolder={"Enter an item!"} />
          <ScrollView>
            <List list={this.state.todos} onPressItem={this.ifPressed} />
          </ScrollView>
        </View>
        <View style={styles.headerContainer}>
          <Footer onClearItems={this.removeItems}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listContainer: {
    flex: 10,
    width: '100%',
    borderColor: 'black',
  },
  headerContainer: {
    flex: 1,
    width: '100%',
  }
});
