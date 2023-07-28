
import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DataTable from 'react-data-table-component';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { Task, filData } from '../../utils/models';
import { createTask, getTasksList } from './tasksSlice';
import { Spinner } from 'react-bootstrap';

/**
 * Tasks page with data
 * @returns show list of tasks 
 */
export function Tasks() {

  const columns = [
    { name: 'Task', selector: row => row.task },
    { name: 'Status', selector: row => row.status === 1 ? 'waiting' : row.status === 2 ? 'done' : 'canceled' },
  ];

  let _filData = new filData();
  let _task = new Task();
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState(0);
  const [createEditVisible, setCreateEditVisible] = useState(false);
  const [task, setTask] = useState(_task);

  /**
* method to filter data
* @returns filtered list
*/
  const handleFilter = () => {

    _filData = new filData();
    _filData.status = status;

    dispatch(getTasksList(_filData));
  };


  const handleSubmit = () => {
    debugger
    if (task) {
      dispatch(createTask(task));
      handleBack();
       
    }
  };

  const handleBack = () => {
    _task = new Task();
    setTask(_task);
    setCreateEditVisible(false);
  };

  useEffect(() => {

    dispatch(getTasksList(_filData));
  }, [dispatch]);

  const {
    tasks,
    loading,
    error,
    dataChanged,
  } = useAppSelector((state) => state.tasksReducer);

  return (
    <div>
      {createEditVisible && <Row>
        <Col>
        </Col>
        <Col>
          <Button variant="warning" style={{ width: "100%" }} onClick={handleBack}>Back</Button>
        </Col>
        <Col>
        </Col>
      </Row>}

      {!createEditVisible && <Card>
        <Card.Header>Filter <i></i></Card.Header>
        <Card.Body>

          <Form>
            <Row>
              <Col>
                <label>Status :</label >
                <Form.Select aria-label="Status" onChange={(e) => { setStatus(parseInt(e.target.value)); }}>
                  <option value="0">All</option>
                  <option value="1">waiting</option>
                  <option value="2">done</option>
                  <option value="3">cancel</option>
                </Form.Select>
              </Col>
              <Col>

              </Col>
              <Col>

              </Col>
            </Row>
            <br />
            <Row>
              <Col>
              </Col>
              <Col>
                <Button variant="primary" style={{ width: "100%" }} onClick={handleFilter}>Filter</Button>
              </Col>
              <Col>
                <Button variant="primary" style={{ width: "100%" }} onClick={(e) => { setCreateEditVisible(true) }}>Create New</Button>
              </Col>
              <Col>
              </Col>
            </Row>
          </Form>

        </Card.Body>
      </Card>}
      <br></br>
      {!createEditVisible && <Card>
        <Card.Header>Data <i></i></Card.Header>
        <Card.Body>
          {error && <Alert variant='danger'>There is an error</Alert>}
          {!error && loading ? (
            <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>
          ) : (
            <>
              {!error && tasks && (<><label>Total tasks is: {tasks.length}</label> <DataTable columns={columns} data={tasks} striped pagination /></>)}

            </>
          )}
        </Card.Body>
      </Card>}
      {createEditVisible && <Card>
        <Card.Header>Create\Edit data <i></i></Card.Header>
        <Card.Body>

          <Form>
            <Row>
              <Col>

                <label>Task :</label>
                <Form.Control type="text" id="Task" placeholder="Task title" value={task.task} onChange={(e) => { _task.task = e.target.value; setTask(_task); }} />
              </Col>
              <Col>
                <label>Status : </label >
                <Form.Select aria-label="Status" placeholder="Select one" onChange={(e) => { _task.status = parseInt(e.target.value); setTask(_task); }}>
                  <option value="1">waiting</option>
                  <option value="2">done</option>
                  <option value="3">cancel</option>
                </Form.Select>
              </Col>
              <Col>

              </Col>
              <Col>

              </Col>
            </Row>
            <br />
            <Row>
              <Col>
              </Col>
              <Col>
                <Button variant="success" style={{ width: "100%" }} onClick={handleSubmit} >Submit</Button>
              </Col>
              <Col>

              </Col>
            </Row>
          </Form>

        </Card.Body>
      </Card>}

    </div>
  );
}
