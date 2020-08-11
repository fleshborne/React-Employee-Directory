import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Search from './components/Search';
import ninjas from './data/employeeData.json';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
  state = {
    result: {},
    search: '',
  };
  handleInputChange = (event) => {
    const search = event.target.name;
    const value = event.target.value;
    this.setState({ [search]: value });
  };
  // condition ? value_if_true : value_if_false

  render() {
    return (
      <div className='App'>
        <Header />
        <Search
          handleInputChange={this.handleInputChange}
          search={this.state.search}
        />
        <Container className='wrapper'>
          <Row>
            <Col>
              {this.state.search !== undefined ? (
                <Table data={ninjas} search={this.state.search} />
              ) : (
                <Table data={ninjas} />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
//
export default App;
// please just work
// filter function
