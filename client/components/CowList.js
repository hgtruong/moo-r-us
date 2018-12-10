import React from 'react';
import CowDetails from './CowDetails.js'

class CowList extends React.Component {
  constructor(props){
    super(props);

  }


  render() {
    return (
      <div> Cows in database:
        {
          // TODO: call cowDetails when cow name clicked
          this.props.cows.map( (cow) => {
            return (
              <div key={cow.id}> {cow.name}
                < CowDetails description={cow.description} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default CowList;
