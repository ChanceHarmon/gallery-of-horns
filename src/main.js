import React from 'react';
import HornedBeasts from './hornedBeasts';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck'
import './main.css'

class Main extends React.Component {
  render() {
    return (
      <>
        <div id="card-deck">
          <CardDeck>
            {this.props.beastData.map((beast, index) => {
              return <div key={index}>
                <HornedBeasts title={beast.title} url={beast.image_url} description={beast.description} key={index} index={index} displayAsModal={this.props.displayAsModal} />
              </div>
            })}
          </CardDeck>
        </div>
      </>
    )
  }

}

export default Main;