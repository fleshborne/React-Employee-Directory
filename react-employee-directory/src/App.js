import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Container from 'react-bootstrap/Container';
import data from './data/employeeData.json';

function App() {
  return (
    <div className='App'>
      <Header />
      <Container className='wrapper'>
        <Table data={data} />
      </Container>
    </div>
  );
}

export default App;
