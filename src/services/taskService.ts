import { Task, TaskResponseModel, FilterData } from "../utils/models";

 

/** 
 * call getTasks Rest Api from back-end server to retrieve list of tasks  
 * @param {FilterData} _filData - object of filter data : {status}
 * @returns list of tasks 
 */
const getTasks = async (_filData: FilterData = new FilterData()) : Promise<TaskResponseModel> => {
  console.log(process.env.REACT_APP_API_URL);
  //call getTasks Rest API from server
  const response = await fetch(`${process.env.REACT_APP_API_URL}/Api/getTasks`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(_filData)
  });
    return response.json(); 
};
  

/** 
 * call createTask Rest Api from back-end server to create new task  
 * @param {Task} Task - object of task data 
 * @returns new task 
 */
const createTask = async (_inputData: Task = new Task()) => {
  
  //call createTask Rest API from server
  const response = await fetch(`${process.env.REACT_APP_API_URL}/Api/createTask`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(_inputData)
  });
    return response.json(); 
};
  
/** 
 * call updateTask Rest Api from back-end server to update task  
 * @param {Task} Task - object of task data 
 */
const updateTask = async (_inputData: Task = new Task()) => {
  
  //call updateTask Rest API from server
  const response = await fetch(`${process.env.REACT_APP_API_URL}/Api/updateTask`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(_inputData)
  });
    return response.json(); 
};
  
  
/** 
 * call updateTask Rest Api from back-end server to update task status  
 * @param {Task} Task - object of task data 
 */
const updateTaskStatus = async (_inputData: Task = new Task()) => {
  
  //call updateTask Rest API from server
  const response = await fetch(`${process.env.REACT_APP_API_URL}/Api/updateTaskStatus`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(_inputData)
  });
    return response.json(); 
};
  
/** 
 * call deleteTask Rest Api from back-end server to delete new task  
 * @param {number} id - id
 */
const deleteTask = async (id: number) => {
  
  //call deleteTask Rest API from server
  const response = await fetch(`${process.env.REACT_APP_API_URL}/Api/deleteTask/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
    return response.json(); 
};
  
 

const taskService = {
  getTasks,
  createTask,
  updateTask,
  updateTaskStatus,
  deleteTask
};
export default taskService;