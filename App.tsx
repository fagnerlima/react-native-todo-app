import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TodoAdd from './screens/TodoAdd';
import TodoList from './screens/TodoList';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TodoList">
        <Stack.Screen name="TodoList" component={TodoList}
          options={{
            title: 'ToDo\'s'
          }} />
        <Stack.Screen name="TodoAdd" component={TodoAdd}
          options={{
            title: 'ToDo'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
