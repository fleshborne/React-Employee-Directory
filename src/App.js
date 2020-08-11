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
      directionRole: {
        role: 'asc',
      },
    };
    this.sortBy = this.sortBy.bind(this);
    this.sortByRole = this.sortByRole.bind(this);
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

  sortByRole(key) {
    this.setState({
      ninjas: ninjas.sort((a, b) =>
        this.state.directionRole[key] === 'asc'
          ? a[key] > b[key]
          : b[key] > a[key]
      ),
      directionRole: {
        [key]: this.state.directionRole[key] === 'asc' ? 'desc' : 'asc',
      },
    });
  }

  state = {
    result: {},
    search: '',
  };
  handleInputChange = (event) => {
    const search = event.target.name;
    const value = event.target.value;
    this.setState({ [search]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const filterNinja = event.target.value;
    if (!this.state.filtered) {
      this.setState({
        ninjas: this.state.ninjas.sort(
          (a, b) => a[filterNinja] > b[filterNinja]
        ),
        filtered: true,
      });
    }
  };
  // condition ? value_if_true : value_if_false
  render() {
    return (
      <div className='App'>
        <Header />
        <Search
          handleInputChange={this.state.handleInputChange}
          search={this.state.search}
          onSubmit={this.state.handleSubmit}
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
              <Table
                data={this.state.ninjas}
                sortBy={this.sortBy}
                sortByRole={this.sortByRole}
              />
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
