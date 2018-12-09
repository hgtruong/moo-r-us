import React from 'react';
import CowList from './CowList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowList: [],
      cowName: '',
      cowDescription: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit(event) {
    var cowObj = {
      name: this.state.cowName,
      description: this.state.cowDescription
    }

    this.postFetch(cowObj);

    event.preventDefault();
  }

  getFetch = function() {
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

  postFetch = function(dataObj) {
    console.log('data is', dataObj);
    fetch('http://localhost:3000/api/cows', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dataObj)
    })
  }

  componentDidMount() {
    this.getFetch();
  }

  render(){
    return (
      <div>
        <div className='inputBox'>
         <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" name='cowName' onChange={this.handleChange} />
              Description:
              <input type="text" name='cowDescription' onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className='cowList'>
          <CowList cows={this.state.cowList} />
        </div>
      </div>
    );
  }
}

export default App;


