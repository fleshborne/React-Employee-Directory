import React from 'react';
import { Table } from 'react-bootstrap/Table';

class Table extends React.Component {
  render() {
    return (
      <div className='teamtable mt-5'>
        <table
          id='table'
          className='table table-striped table-hover table-condensed'
        ></table>
      </div>
    );
  }
}
