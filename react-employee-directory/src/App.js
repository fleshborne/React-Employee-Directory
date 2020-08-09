import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data/employeeData.json';

function App() {
  return (
    <div className='App'>
      <Header />
      <Container className='wrapper'>
        <Row>
          <Col>
            <Table data={data} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
