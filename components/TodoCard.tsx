import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import moment from 'moment';

import { Todo } from '../models/Todo';

export interface TodoCardProps {
  todo: Todo;
}

export default (params: TodoCardProps) => {
  const { todo } = params;

  const onChangeDone = (value: boolean) => {
    console.log('change done', value);
  };

  return (
    <View key={todo._id} style={styles.container}>
      <View>
        <CheckBox
          disabled={false}
          value={todo.done}
          onChange={() => onChangeDone(todo.done)}
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
