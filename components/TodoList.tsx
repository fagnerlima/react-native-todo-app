import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TodoService from '../services/TodoService';
import Todo from '../models/Todo';

export default () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoService = new TodoService();

  useEffect(() => {
    todoService.list()
      .then(data => setTodos(data));
  });

  return (
    <View style={styles.container}>
      <Text>ToDo List ({todos.length})</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  }
});
