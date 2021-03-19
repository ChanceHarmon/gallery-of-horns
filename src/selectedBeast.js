import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {
  render() {
    console.log(this.props)
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.theeBeast.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Card
              bg="dark"
              text="light"
              onClick={this.displayAsModal}
            >
              <Card.Header>Thanks for voting for me!</Card.Header>
              <Card.Img variant="top" alt={this.props.theeBeast.title} src={this.props.theeBeast.image_url} />
              <Card.Body>
                <Card.Title>{this.props.theeBeast.title}</Card.Title>
                <Card.Text>
                  {this.props.theeBeast.description}
                </Card.Text>
                <Card.Text>
                  I have {this.props.theeBeast.horns} Horns!
                </Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.handleClose} variant="secondary">Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    )
  }
}
export default SelectedBeast;