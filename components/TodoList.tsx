import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Todo } from '../models/Todo';
import TodoService from '../services/TodoService';
import TodoCard from './TodoCard';

export default () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoService = new TodoService();

  useEffect(() => {
    todoService.list()
      .then(data => setTodos(data));
  });

  const renderCards = () => {
    return todos.map((todo, index) => <TodoCard todo={todo} key={index} />);
  }

  return (
    <View style={styles.container}>
      <Text>ToDo List ({todos.length})</Text>
      <ScrollView>{renderCards()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 5,
    paddingRight: 5
  }
});
