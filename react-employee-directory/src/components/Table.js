import React from 'react';
import Tables from 'react-bootstrap/Table';
import TableData from './TableData';
import TableHeader from './TableHeader';
import '../App.css';

class Table extends React.Component {
  render() {
    return (
      <Tables striped bordered hover variant='dark'>
        <TableHeader />

        <TableData />
      </Tables>
    );
  }
}

export default Table;
