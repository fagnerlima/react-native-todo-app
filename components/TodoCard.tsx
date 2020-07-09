import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Icon } from 'react-native-elements';

import moment from 'moment';

import Todo from '../models/Todo';
import TodoService from '../services/TodoService';

export interface TodoCardProps {
  todo: Todo;
  onDelete: (todo: Todo) => void;
}

export default (params: TodoCardProps) => {
  const [todo, setTodo] = useState(params.todo);
  const todoService = new TodoService();

  const onChangeDone = () => {
    todo.done = !todo.done;
    todoService.update(todo._id as string, todo)
      .then(data => setTodo(data));
  };

  const deleteTodo = () => {
    Alert.alert(
      'Delete confirmation',
      'Are you sure you want to delete this ToDo?',
      [
        {
          text: 'Cancel'
        },
        {
          text: 'OK',
          onPress: () => {
            todoService.delete(todo._id as string)
              .then(() => {
                Alert.alert('', 'ToDo deleted successfully');
                params.onDelete(todo);
              });
          }
        }
      ],
      { cancelable: false }
    );
  }

  return (
    <View key={todo._id} style={styles.container}>
      <View>
        <CheckBox
          value={todo.done}
          onChange={onChangeDone}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.description}>
          {todo.description}
        </Text>
        <Text style={styles.createdAt}>
          Created at: {moment(todo.createdAt).format('YYYY-MM-DD')}
        </Text>
      </View>
      <View style={styles.flexSpacer}></View>
      {/* <View>
        <TouchableOpacity onPress={deleteTodo}>
          <Icon name="delete" size={45} color="#c33" />
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  textContainer: {
    flexShrink: 1
  },
  flexSpacer: {
    flexGrow: 1
  },
  description: {
    fontSize: 20,
    flex: 1,
    flexShrink: 1,
    flexWrap: 'wrap'
  },
  createdAt: {
    fontSize: 11
  }
});
