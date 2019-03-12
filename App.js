import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import Title from './Components/Title';
import List from './Components/List';
import Footer from './Components/Footer';
import Input from './Components/Input';

export default class App extends React.Component {
  state = {
    todos: [],
  }

  addItem = (item) => {
    const {todos} = this.state;
    const newItem = Object.assign(todos, {doThis: item, remove: false})
    this.setState({todos: [newItem, ...todos]});
  };

  removeItems = () => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter((item, i) => item.remove === false)
    });
  }

  ifPressed = (index) => {
    const {todos} = this.state
    const newState = Object.assign({}, this.state)
    newState.todos[index].remove = !newState.todos[index].remove
    this.setState({newState});  
  }

  render() {
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
