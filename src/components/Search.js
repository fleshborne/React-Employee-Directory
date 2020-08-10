import React from 'react';
// import Ninjas from '../data/employeeData.json';

class Search extends React.Component {
  render() {
    return (
      <form>
        <div className='form-group align-items-center'>
          <label htmlFor='search'>Search For a Ninja</label>
          <input
            onChange={this.props.handleInputChange}
            value={this.props.search}
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
}

export default Search;
