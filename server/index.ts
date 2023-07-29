
import { BaseResponseModel, Task, TaskResponseModel, filData } from "./models/models";
import taskService from "./services/taskService";
import express from "express";

const PORT = 8080;

const app = express();

console.log('getMembers - body is ', taskService.tasks);

app.use(express.json());

app.use(function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-credentials", 'true');
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});

//Run server using #Yarn Server

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

/**
 * service method to retrieve test data
 * @returns hello
 */
app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello" });
});

/**
* service method to retrieve tasks data
* @returns tasks list
*/
app.post('/api/getTasks', (req, res) => {
  console.log('getTasks - body is ', req.body);
  var dataBody: filData = req.body;
  console.log('filter data is :', dataBody);
  taskService.tasks().then((datalist: Task[]) => {

    if (!(dataBody.status === undefined || dataBody.status === 0)) {
      console.log('status filtered');
      datalist = datalist.filter(task => task.status === dataBody.status);
    }
    let taskResponseData: TaskResponseModel = new TaskResponseModel();
    taskResponseData.data = datalist;
    taskResponseData.message = 'Done';
    res.status(200).send(taskResponseData);
  });
});


/**
* service method to create tasks
* @returns created task
*/
app.post('/api/createTask', (req, res) => {
  console.log('createTask - body is ', req.body);
  var dataBody: Task = req.body ? req.body : null;
  let baseResponseData: BaseResponseModel = new BaseResponseModel();

  if (!(dataBody.status === undefined || dataBody.task === undefined || dataBody.task === '')) {
    taskService.tasks().then((datalist: Task[]) => {
      const MaxId: number = Math.max.apply(Math, datalist.map(o => { return o.id; }));
      dataBody.id = MaxId + 1;
      let mergedArray = [...datalist, dataBody];
      taskService.newTasks(JSON.stringify(mergedArray)).then();

      baseResponseData.message = 'Done successfully';
      res.status(200).send(baseResponseData);
    });
  } else {
    baseResponseData.message = 'Data not entered';
    res.status(500).send(baseResponseData).statusMessage = baseResponseData.message;
  }
});


/**
* service method to update tasks
* @returns update task
*/
app.put('/api/updateTask/:id', (req, res) => {
  console.log('updateTask - body is ', req.params);
  let baseResponseData: BaseResponseModel = new BaseResponseModel();

  if (!(req.params === undefined || req.params.id === '')) {
    taskService.tasks().then((datalist: Task[]) => {
      let newDataList = datalist.filter(row => row.id != parseInt(req.params.id));

      taskService.newTasks(JSON.stringify(newDataList)).then();

      baseResponseData.message = 'Done successfully';
      res.status(200).send(baseResponseData);
    });
  } else {
    baseResponseData.message = 'Data not entered';
    res.status(500).send(baseResponseData).statusMessage = baseResponseData.message;
  }
});


/**
* service method to delete tasks
* @returns delete task
*/
app.delete('/api/deleteTask', (req, res) => {
  console.log('deleteTask - body is ', req.body);
  let baseResponseData: BaseResponseModel = new BaseResponseModel();
  var dataBody: Task = req.body ? req.body : null;

  if (!(dataBody.status === undefined || dataBody.task === '')) {
    taskService.tasks().then((datalist: Task[]) => {
      let row = datalist.find(row => row.id == dataBody.id);
      row.status = dataBody.status;
      row.task = dataBody.task;
      let mergedArray = [...datalist, dataBody];
      taskService.newTasks(JSON.stringify(mergedArray)).then();
      
      
      baseResponseData.message = 'Done successfully';
      res.status(200).send(baseResponseData);
    });
  } else {
    baseResponseData.message = 'Data not entered';
    res.status(500).send(baseResponseData).statusMessage = baseResponseData.message;
  }
});
