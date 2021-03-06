import React from 'react';
import { View, StyleSheet, TextInput, Button, Text, Alert } from 'react-native';

import { withFormik, FormikProps, FormikErrors } from 'formik';

import Todo from '../models/Todo';
import TodoService from '../services/TodoService';

export interface TodoAddProps extends FormikProps<Todo> {
}

const TodoForm = (props: TodoAddProps) => {
  const todo = props.values;
  const { touched, errors, isSubmitting, handleSubmit } = props;

  const submit = () => handleSubmit();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={todo.description}
        placeholder="Description"
        onChangeText={value => props.setFieldValue('description', value)}
      />
      {touched.description && errors.description && <Text style={styles.error}>{errors.description}</Text>}
      <Button
        title="Save"
        onPress={submit}
        disabled={isSubmitting}
      />
    </View>
  );
}

interface TodoFormProps {
}

const todoService = new TodoService();

export default withFormik<TodoFormProps, Todo>({

  mapPropsToValues: () => ({
    description: ''
  }),

  validate: (todo: Todo) => {
    let errors: FormikErrors<Todo> = {};

    if (!todo.description) {
      errors.description = 'Required field';
    }

    return errors;
  },

  handleSubmit: (todo, { setSubmitting }) => {
    todoService.save(todo)
      .then(() => todo.description = '')
      .finally(() => setSubmitting(false));
  }
})(TodoForm);

const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 5,
    padding: 5,
  },
  error: {
    borderLeftColor: '#800',
    borderLeftWidth: 2,
    color: '#800',
    marginBottom: 5,
    padding: 5,
  }
});
