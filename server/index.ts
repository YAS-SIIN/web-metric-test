
import { Task, filData } from "./models/models";
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
   var dataBody : filData = req.body;
   console.log('filter data is :', dataBody);
   taskService.tasks().then((datalist : Task[]) => {
  
      if (!(dataBody.status === undefined || dataBody.status === 0)) {
        console.log('status filtered');
        datalist = datalist.filter(task => task.status === dataBody.status);
      } 
    res.status(200).send(datalist);
  });
});


 /**
 * service method to create tasks
 * @returns created task
 */
 app.post('/api/createTask', (req, res) => {
  console.log('createTask - body is ', req.body);
   var dataBody : Task = req.body ? req.body : null;
   if (!(dataBody.status === undefined || dataBody.task === '')) {
    taskService.tasks().then((datalist : Task[]) => {
      const MaxId : number= Math.max.apply(Math, datalist.map(o => { return o.id; }));
      dataBody.id = MaxId+1;
      let mergedArray = [...datalist, dataBody];
      taskService.newTasks(JSON.stringify(mergedArray)).then();
      res.status(200).send(dataBody);
    });
   } else { 
    res.status(500).send().statusMessage= 'Data not entered';
   }
});

