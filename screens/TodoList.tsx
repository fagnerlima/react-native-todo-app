import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';

import Todo from '../models/Todo';
import TodoService from '../services/TodoService';
import FloatButton from '../components/FloatButton';
import TodoCard from '../components/TodoCard';

export interface TodoListProps {
  navigation: StackNavigationProp<any, any>;
}

export default (props: TodoListProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoService = new TodoService();

  useEffect(() => {
    todoService.list()
      .then(data => setTodos(data));
  }, [todos]);

  const deleteTodo = () => setTodos([]);

  const renderCards = () => {
    return todos.map((todo, index) => <TodoCard todo={todo} key={index} onDelete={(deleteTodo)} />);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {renderCards()}
      </ScrollView>
      <FloatButton iconName="add" onPress={() => props.navigation.navigate('TodoAdd')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 5,
  }
});
