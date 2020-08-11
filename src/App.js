import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Search from './components/Search';
import ninjas from './data/employeeData.json';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   data.forEach((ninja) => setData(ninja));
  // }, []);
  constructor(props) {
    super(props);
    this.state = {
      ninjas: ninjas,
      direction: {
        id: 'asc',
      },
    };
    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(key) {
    this.setState({
      ninjas: ninjas.sort((a, b) =>
        this.state.direction[key] === 'asc'
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key])
      ),
      direction: {
        [key]: this.state.direction[key] === 'asc' ? 'desc' : 'asc',
      },
    });
  }

  state = {
    result: {},
    search: '',
  };
  // handleInputChange = (event) => {
  //   const search = event.target.name;
  //   const value = event.target.value;
  //   this.setState({ [search]: value });
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const filterNinja = event.target.value;
  //   if (!this.state.filtered) {
  //     this.setState({
  //       ninjas: this.state.ninjas.sort((a, b) =>
  //         a[filterNinja].localeCompare(b[filterNinja])
  //       ),
  //       filtered: true,
  //     });
  //   }
  // };
  // condition ? value_if_true : value_if_false
  render() {
    return (
      <div className='App'>
        <Header />
        <Search
        // handleInputChange={handleInputChange}
        // search={state.search}
        // onSubmit={handleSubmit}
        />
        <Container className='wrapper'>
          <Row>
            <Col>
              {/* {state.search !== undefined ? (
              <Table
                data={ninjas}
                search={state.search}
                sortBy={sortBy}
              />
            ) : ( */}
              <Table data={this.state.ninjas} sortBy={this.sortBy} />
              {/* )} */}
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
