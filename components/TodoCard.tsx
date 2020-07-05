import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import moment from 'moment';

import Todo from '../models/Todo';
import TodoService from '../services/TodoService';

export interface TodoCardProps {
  todo: Todo;
}

export default (params: TodoCardProps) => {
  const [todo, setTodo] = useState(params.todo);
  const todoService = new TodoService();

  const onChangeDone = () => {
    todo.done = !todo.done;
    todoService.update(todo._id, todo)
      .then(data => setTodo(data));
  };

  return (
    <View key={todo._id} style={styles.container}>
      <View>
        <CheckBox
          value={todo.done}
          onChange={onChangeDone}
        />
      </View>
      <View>
        <Text style={styles.description}>
          {todo.description}
        </Text>
        <Text style={styles.createdAt}>
          Created at: {moment(todo.createdAt).format('YYYY-MM-DD')}
        </Text>
      </View>
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
    marginBottom: 5,
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  description: {
    fontSize: 20
  },
  createdAt: {
    fontSize: 11
  }
});
