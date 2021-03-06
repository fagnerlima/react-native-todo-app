import axios from 'axios';

export default abstract class RepositoryService<T> {

  protected readonly abstract baseUrl: string;
  protected readonly abstract endpointUrl: string;

  async list(): Promise<T[]> {
    return axios.get<T[]>(this.getResourceBaseUrl())
      .then(response => response.data);
  }

  async save(todo: T): Promise<T> {
    return axios.post<T>(this.getResourceBaseUrl(), todo)
      .then(response => response.data);
  }

  async update(_id: string, todo: T): Promise<T> {
    return axios.put<T>(`${this.getResourceBaseUrl()}/${_id}`, todo)
      .then(response => response.data);
  }

  async delete(_id: string): Promise<void> {
    return axios.delete<void>(`${this.getResourceBaseUrl()}/${_id}`)
      .then(response => response.data);
  }

  getResourceBaseUrl(): string {
    return this.baseUrl + this.endpointUrl;
  }
}
