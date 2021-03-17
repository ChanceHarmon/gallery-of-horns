import React from 'react';
import Card from 'react-bootstrap/Card'

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positiveVotes: 0
    }
  }

  addVotes = () => {
    this.setState({ positiveVotes: this.state.positiveVotes + 1 })
  }
  render() {
    return (
      <>
        <Card className="bg-dark text-white">
          <Card.Img src={this.props.url} alt={this.props.description} />
          <Card.ImgOverlay>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              🖤  {this.state.positiveVotes}
            </Card.Text>
            <Card.Text>
              {this.props.description}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </>
    )
  }

}

export default HornedBeasts;
