
import tasks from "./services/taskService";
import express from "express";

const PORT = 8080;

const app = express();
 
console.log('getMembers - body is ', tasks);

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
app.get('/api/getTasks', (req, res) => {
  console.log('getMembers - body is ', req.body);

  tasks().then((datalist) => {
    res.send(datalist);
  });
});

