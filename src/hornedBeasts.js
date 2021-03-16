import React from 'react';

class HornedBeasts extends React.Component {
  render() {
    return (
      <>
        <h2>
          {this.props.title}
        </h2>
        <img src={this.props.url} alt={this.props.description} title={this.props.title} />
        <p>
          {this.props.description}
        </p>
      </>
    )
  }

}

export default HornedBeasts;
