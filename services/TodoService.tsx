import RepositoryService from './RepositoryService';

export default class TodoService extends RepositoryService {

  protected readonly baseUrl = 'https://node-todo-dev.herokuapp.com/api';
  protected readonly endpointUrl = '/todos';
}
