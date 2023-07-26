const fs = require('fs');
const path = require('path');
 
const TASKS_PATH = path.join(__dirname, 'json_files', 'tasks.json');

const readJsonFile = (path) => new Promise((resolve) => fs.readFile(path, 'utf8', (_, data) => resolve(data)))
  .then((data) => JSON.parse(data))
  .then((data) => data.data);

const tasks = () => readJsonFile(TASKS_PATH); 

module.exports = {tasks}

