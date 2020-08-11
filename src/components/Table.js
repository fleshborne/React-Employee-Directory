import React from 'react';
import Tables from 'react-bootstrap/Table';
import TableData from './TableData';
import TableHeader from './TableHeader';
import '../App.css';

export default function Table(props) {
  return (
    <Tables striped bordered hover variant='dark' className='table-responsive'>
      <TableHeader sortBy={props.sortBy} sortByRole={props.sortByRole} />

      <TableData />
    </Tables>
  );
}
