import React from 'react';
import './app.css';
import Header from './header';
import Footer from './footer';
import Main from './main';
import BeastArray from './data.json';
import SelectedBeast from './selectedBeast'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastData: BeastArray,
      displayModal: false,
      theeBeast: {}
    }
  }

  displayAsModal = (index) => {
    console.log(index)
    this.setState({ theeBeast: this.state.beastData[index], displayModal: true })
    console.log(this.state)
  };

  handleClose = () => {
    this.setState({ displayModal: false })
  }

  handleFilter = (beastData) => {
    console.log(beastData)
    this.setState({ beastData })
  }
  render() {
    return (
      <>
        <div>
          <Header />
          <Main beastData={this.state.beastData} displayAsModal={this.displayAsModal} handleFilter={this.handleFilter} />
          <SelectedBeast theeBeast={this.state.theeBeast} show={this.state.displayModal} handleClose={this.handleClose} />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
