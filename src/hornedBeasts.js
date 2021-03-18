import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positiveVotes: 0
    }
  }

  addVotes = () => {
    console.log(this.props)
    this.setState({ positiveVotes: this.state.positiveVotes + 1 })
    this.props.displayAsModal(this.props.index)
  }
  render() {
    return (
      <>
        <Card
          style={{ width: '18rem' }}
          text="bold"
        >
          <Image variant="top" src={this.props.url} alt={this.props.description} height="350px" />
          {/* <Card.Img variant="top" src={this.props.url} alt={this.props.description} /> */}
          <Card.Title>{this.props.title}</Card.Title>
          <Button onClick={this.addVotes}>
            🖤  {this.state.positiveVotes}
          </Button>

        </Card>
      </>
    )
  }

}

export default HornedBeasts;
