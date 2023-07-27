import fs from "fs";
import path from "path";
import { task } from "../models/models";
 
const TASKS_PATH = path.join(__dirname, 'json_files', 'tasks.json');

const readJsonFile = (path) => new Promise((resolve) => fs.readFile(path, 'utf8', (_, data) => resolve(data)))
  .then((data : string) => JSON.parse(data))
  .then((data) => data);

  console.log(TASKS_PATH);

  //let tasks = require(TASKS_PATH);
 
const tasks = () => readJsonFile(TASKS_PATH);

export default tasks

