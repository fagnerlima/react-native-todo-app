import RepositoryService from './RepositoryService';

import Todo from '../models/Todo';

export default class TodoService extends RepositoryService<Todo> {

  protected readonly baseUrl = 'https://node-todo-dev.herokuapp.com/api';
  protected readonly endpointUrl = '/todos';
}
