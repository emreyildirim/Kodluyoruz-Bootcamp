import axios from 'axios';

const instance = axios.create({
    baseURL:'https://5faa6d19b5c645001602a8e7.mockapi.io/api'
})

export const getTasks = () => {
    return instance.get('/todos');
  };

export const putTaskById = (taskId,e) => {
    return instance.put(`/todos/${taskId}`,e);
  };
export const createNewTask = (task)=>{
  return instance.post('/todos',task)
}
export const deleteTasksById = (taskId) => {
  return instance.delete(`/todos/${taskId}`);
};
