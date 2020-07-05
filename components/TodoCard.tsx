import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import moment from 'moment';

import { Todo } from '../models/Todo';

export interface TodoCardProps {
  todo: Todo;
}

export default (params: TodoCardProps) => {
  const { todo } = params;

  return (
    <View key={todo._id} style={styles.container}>
      <Text style={styles.description}>
        {todo.description}
      </Text>
      <Text style={styles.createdAt}>
        Created at: {moment(todo.createdAt).format('YYYY-MM-DD')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderRadius: 6,
    borderWidth: 1,
    height: 60,
    marginBottom: 5,
    padding: 5
  },
  description: {
    fontSize: 16
  },
  createdAt: {
    fontSize: 10
  }
});
