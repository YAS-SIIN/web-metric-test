import { Task, filData } from "../utils/models";

 

/** 
 * call getTasks Rest Api from back-end server to retrieve list of tasks  
 * @param _filData - object of filter data : {status}
 * @returns list of tasks 
 */
const getTasks = async (_filData: filData = new filData()) => {
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
 * @param Task - object of task data 
 * @returns list of tasks 
 */
const createTask = async (_inputData: Task = new Task()) => {
  debugger
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
  
const taskService = {
  getTasks,
  createTask
};
export default taskService;