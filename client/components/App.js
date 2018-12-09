import React from 'react';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/cows', {
      method: 'GET'
      // headers: {"Content-Type": "application/json"}
    })
    .then( (results) => {
      console.log('results is', results);
    })
  }

  render(){

    return (
      <div>
        <div className='inputBox'> </div>
        <div className='cowList'> 'I AM ALIVE'

        </div>
      </div>
    );
  }
}

export default App;


