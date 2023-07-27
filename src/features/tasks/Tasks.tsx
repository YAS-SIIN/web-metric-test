
import React  from 'react'; 
import { Alert, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DataTable from 'react-data-table-component';

/**
 * Tasks page with data
 * @returns show list of tasks 
 */
export function Tasks() {

  return (
    <div>

      <Card>
        <Card.Header>Filter <i></i></Card.Header>
        <Card.Body>

          <Form>
            <Row>
              <Col>
                <label>Status :</label>
                <Form.Select aria-label="Status">
                  <option value="all">All</option>
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
