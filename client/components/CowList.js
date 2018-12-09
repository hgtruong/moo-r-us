import React from 'react';

class CowList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div> Cows in database:
        {
          // TODO: call cowDetails when cow name clicked
          this.props.cows.map(function(cow) {
            return <div key={cow.id}>{cow.name}</div>
          })
        }
      </div>
    )
  }
}

export default CowList;