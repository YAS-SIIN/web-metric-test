import fs from "fs";
import path from "path";
 
const TASKS_PATH = path.join(__dirname, 'json_files', 'tasks.json');

const readJsonFile = (path: string) => new Promise((resolve) => fs.readFile(path, 'utf8', (_, data) => resolve(data)))
  .then((data : string) => JSON.parse(data))
  .then((data) => data);

  
const writeJsonFile = (path: string, inputData : string) => new Promise((resolve) => fs.writeFile(path, inputData, 'utf8', (data) => resolve(data)));

const tasks = () => readJsonFile(TASKS_PATH);

const newTasks = (inputData : string) => writeJsonFile(TASKS_PATH, inputData);

export const taskService = { tasks, newTasks};

export default taskService;

