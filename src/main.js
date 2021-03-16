import React from 'react';
import HornedBeasts from './hornedBeasts';
import BeastArray from './data.json';

class Main extends React.Component {
  render() {
    return (
      <>
        <ul>
          {BeastArray.map(beast => {
            return <li><HornedBeasts title={beast.title} url={beast.image_url} description={beast.description} /></li>
          })}
        </ul>

      </>
    )
  }

}

export default Main;