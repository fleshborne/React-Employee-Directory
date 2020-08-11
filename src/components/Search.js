import React from 'react';
// import Ninjas from '../data/employeeData.json';

export default function Search(props) {
  return (
    <form>
      <div className='form-group align-items-center'>
        <label htmlFor='search'>Search For a Ninja</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name='search'
          type='text'
          className='form-control'
          placeholder='Search'
          id='search'
          style={{ textAlign: 'center' }}
        />
        <br />
      </div>
    </form>
  );
}
