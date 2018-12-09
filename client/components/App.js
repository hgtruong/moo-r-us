import React from 'react';
import CowList from './CowList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowList: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/cows', {
      method: 'GET',
      headers: {"Content-Type": "application/json"}
    })
    .then( (results) => {
      return results.json();
    })
    .then( (data) => {
      this.setState({cowList: data});
    })
  }

  render(){
    return (
      <div>
        <div className='inputBox'> </div>
        <div className='cowList'>
          <CowList cows={this.state.cowList} />
        </div>
      </div>
    );
  }
}

export default App;


