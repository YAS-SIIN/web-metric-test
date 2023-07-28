
import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DataTable from 'react-data-table-component';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { filData } from '../../utils/models';
import { getTasksList } from './tasksSlice';

/**
 * Tasks page with data
 * @returns show list of tasks 
 */
export function Tasks() {

  const _filData = new filData();
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState('0');

  useEffect(() => {

    dispatch(getTasksList(_filData));
  }, [dispatch]);

  const {} = useAppSelector((state) => state.absencesReducer);

  return (
    <div>

      <Card>
        <Card.Header>Filter <i></i></Card.Header>
        <Card.Body>

          <Form>
            <Row>
              <Col>
                <label>Status :</label >
                <Form.Select aria-label="Status"  onChange={(e) => { setStatus(e.target.value); }}>
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
                <Button variant="primary">Filter</Button>
              </Col>
              <Col>

              </Col>
            </Row>
          </Form>

        </Card.Body>
      </Card>
      <br></br>
      <Card>
        <Card.Header>Data <i></i></Card.Header>
        <Card.Body>
        <Alert variant='danger'>There is an error</Alert>
     
        </Card.Body>
      </Card>
    </div>
  );
}
