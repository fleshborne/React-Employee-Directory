import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Search from './components/Search';
import data from './data/employeeData.json';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
  state = {
    search: '',
  };
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

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
              <Table data={data} search={this.state.search} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
// please just work
