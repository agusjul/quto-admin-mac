import React from'react';
import {Container, Col, Row, Card, Button, Modal} from 'react-bootstrap'

class PesananModal extends React.Component{
    render(){
        return(
            <>
                {console.log(this.props.data)}
                <Button variant="primary" onClick={this.props.handleShow}>
                    Launch static backdrop modal
                </Button>

                <Modal
                    show={this.props.show}
                    onHide={this.props.handleClose}
                    backdrop="static"
                    keyboard={false}
                   
                >
                    <Modal.Header>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>
        </>
        )
    }
}

export default PesananModal;