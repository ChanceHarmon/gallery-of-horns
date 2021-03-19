import React from 'react';
import BeastArray from './data.json'
import HornedBeasts from './hornedBeasts';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Form from 'react-bootstrap/Form';
import './main.css';

class Main extends React.Component {
  filterHorns = (event) => {
    const selectedHorn = parseInt(event.target.value);
    let newList = BeastArray;
    if (selectedHorn) {
      newList = BeastArray.filter(animal => animal.horns === selectedHorn)
    }
    this.props.handleFilter(newList)
  };

  filterType = (event) => {
    const selectedType = event.target.value;
    let newList = BeastArray;
    if (selectedType) {
      newList = BeastArray.filter(animal => {
        if (selectedType === 'all') {
          return animal
        } else {
          return animal.keyword === selectedType
        }
      })
    }
    this.props.handleFilter(newList)
  };

  keywordArray = [];

  createKeywords = () => {
    BeastArray.forEach(beast => {
      if (!this.keywordArray.includes(beast.keyword)) {
        this.keywordArray.push(beast.keyword)
      }
    })
  };

  render() {
    this.createKeywords()
    console.log(this.keywordArray)
    return (
      <>
        <div id="wrapper">
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Filter By Horns</Form.Label>
              <Form.Control as="select" onChange={this.filterHorns}>
                <option value="">All</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="100">Turn It Past 11!</option>
              </Form.Control>
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Filter By Animal Type</Form.Label>
              <Form.Control as="select" onChange={this.filterType}>
                <option value="all">All Beasts</option>
                {this.keywordArray.map((keyword, index) => {
                  return <option key={index} value={keyword}>{keyword}</option>
                })}
              </Form.Control>
            </Form.Group>
          </Form>

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