import axios from 'axios';

import Todo from '../models/Todo';

export default abstract class RepositoryService {

  protected readonly abstract baseUrl: string;
  protected readonly abstract endpointUrl: string;

  async list(): Promise<Todo[]> {
    return axios.get<Todo[]>(this.getResourceBaseUrl())
      .then(response => response.data);
  }

  getResourceBaseUrl(): string {
    return this.baseUrl + this.endpointUrl;
  }
}
