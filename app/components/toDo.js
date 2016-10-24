import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View
} from 'react-native';

export default class ToDo extends Component {
	constructor (props) {
		super(props)
		this.state = {
			ToDos: [
				{
					key: 1,
					name: 'clean bedroom'
				},
				{
					key:2,
					name: 'wash the dishes'
				}
			]
		}
	}

	addTask (task) {
		let newTask = {
			key: Date.now(),
			name: task
		}
		let toDos = this.state.ToDos
		toDos.push(newTask)
		this.setState({ToDos: toDos})
	}

	deleteTask(key) {
		let todos = this.state.ToDos
		let newtodos = todos.filter(task =>  task.key != key)
		this.setState({ToDos: newtodos})
	}

	clearText () {
		this._textInput.setNativeProps({text:''})
	}


  render() {
    return (
      <View style={styles.container} >
      	<Text >
          Your ToDo List
        </Text>
        <TextInput
	        placeholder='Your task'
	        style={{width: 100, height: 40}}
	        onEndEditing={task => {
	        	this.addTask(task.nativeEvent.text)
	        	this.clearText.call(this)
	        }}
	        ref = { component => this._textInput = component}
      	/>

       <ScrollView>
       	{this.state.ToDos.map(task => <Text key={task.key}
       																			onPress={ () => this.deleteTask(task.key)}
       		>{task.name}</Text>)}
       </ScrollView>

        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
  	marginTop: 50,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
  	marginTop: 100,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ToDoAppReactNative', () => ToDoAppReactNative);
