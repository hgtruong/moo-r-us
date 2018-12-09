import React from 'react';

class CowList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log('here is', this.props.cows);
    return (
      <div>
        {
          // TODO: Handle when you user click cow's name
          this.props.cows.map(function(cow) {
            return <div key={cow.id}>{cow.name}</div>
          })
        }
      </div>
    )
  }
}

export default CowList;