import { truncateSync } from 'fs';
import React from 'react'
import {Container, Col, Row, Card, ListGroup, Badge, Modal, Button, Dropdown, DropdownButton} from 'react-bootstrap'
import firebase from '../../firebase';
import PesananModal from './pesananModal';
class Pesanan extends React.Component{
    state={
        order : [],
        modal : false,
        modaldata : []
      }
    
      async componentDidMount(){
        this.getPesanan()
      }

    cssConfirm = (e) => {
        if(e === 'menunggu konfirmasi'){
            return('warning')
        }
        else if(e === 'gagal'){
            return('danger')
        }
        else if(e === 'terkonfirmasi'){
            return('success')
        }
    }
    
    getPesanan = () => {
        const ref = firebase.firestore().collection("pesanan");
        ref.onSnapshot((querySnapshot)=> {
            const items = [];
            querySnapshot.forEach((doc)=> {
                items.push(doc.data());
            });
            console.log(items)
            this.setState({
                order : items
            })
        })
    }

    totalPesanan = (e) => {
        let data = e;
        let i = 0
        data.forEach(function(datas){
            i += datas.jumlah
        })
        return i
    }

    getDate = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        return today = mm + '/' + dd + '/' + yyyy;
    }

    handleClose = () => {
        this.setState({
            modal : false
        })
    }

    handleShow = () => {
        this.setState({
            modal : true
        })
    }

    openModal = (e) => {
        this.setState({
            modaldata : e,
            modal : true
        })
        console.log(this.state.modaldata)
    }


    totalHarga = () => {
        if(this.state.modaldata.data && this.state.modaldata.data.length > 0){
            let total = 0
            this.state.modaldata.data.map((datas, i)=> {
                total += (datas.harga*datas.jumlah)
            })
            return (`${this.formatRupiah(total)}`)
        }
        else {
            return ''
        }
    }

    totalJumlah = () => {
        if(this.state.modaldata.data && this.state.modaldata.data.length > 0){
            let total = 0
            this.state.modaldata.data.map((datas, i)=> {
                total += (datas.jumlah)
            })
            return (`${total}`)
        }
        else {
            return ''
        }
    }

    formatRupiah = (money) => {
        return new Intl.NumberFormat('id-ID',
          { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
        ).format(money);
    }

    accOrder = () => {
        firebase.firestore().collection("/pesanan")
        .doc(this.state.modaldata.id).update({
            status: 'terkonfirmasi'
        })
        .then(() => {
            this.setState({
                modal : false
            })
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }

    rejectOrder = () => {
        firebase.firestore().collection("/pesanan")
        .doc(this.state.modaldata.id).update({
            status: 'gagal'
        })
        .then(() => {
            this.setState({
                modal : false
            })
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }


    render(){
        return(
           <div style={{padding : 40}}>
               <Modal
                    show={this.state.modal}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                    style={{zIndex : '9999999999'}}
                >
                    <Modal.Header  closeButton>
                        <Modal.Title>Detail Pesanan</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <Card style={{ marginBottom : 10, padding : 10}}>
                            <Card.Title style={{padding: 5, marginBottom : 0}}>
                                <p style={{fontWeight : 'normal', fontSize : 14, margin : 0}}><span style={{fontWeight : 'bold'}}>Status : </span>
                                    <Badge style={{marginLeft : 10}} pill variant={`${this.cssConfirm(this.state.modaldata.status)}`}>
                                    {this.state.modaldata.status}
                                    </Badge>
                                </p>
                            </Card.Title>
                            <Card.Body style={{padding : 5}}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item style={{paddingLeft : 0, fontSize : 12}}>
                                        <Row style={{fontWeight : 'bold'}}>
                                            <Col xs={6}>Nama :
                                            </Col>
                                            <Col xs={6}>
                                                    No Meja :
                                            </Col>
                                        </Row>     
                                        <Row>
                                            <Col xs={6}>{this.state.modaldata.nama}</Col>
                                            <Col xs={6}>{this.state.modaldata.meja}</Col>
                                        </Row>            
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{paddingLeft : 0, fontSize : 12}}>
                                        <Row>
                                            {this.state.modaldata.data && this.state.modaldata.data.length > 0 && this.state.modaldata.data.map((datas, index)=>(
                                                <React.Fragment key={index}>
                                                    <Col xs={6}>{datas.menu}</Col>
                                                    <Col xs={2}>{datas.jumlah}</Col>
                                                    <Col xs={4}>{this.formatRupiah(datas.harga)}</Col>
                                                </React.Fragment>
                                            ))}
                                        </Row>                
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{paddingLeft : 0, fontSize : 12}}>
                                        <Row style={{fontWeight : 'bold'}}>
                                            <Col xs={6}>Total</Col>
                                            <Col xs={2}>{this.totalJumlah()}</Col>
                                            <Col xs={4}>{this.totalHarga()}</Col>
                                        </Row>                
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                        </div>
                    </Modal.Body>
                    {this.state.modaldata.status === 'menunggu konfirmasi' ? (
                        <Modal.Footer>
                        <Button variant="outline-primary" onClick={()=>this.rejectOrder()} style={{backgroundColor : 'white', color : '#027BFE'}}>
                            Tolak Pesanan
                        </Button>
                        <Button variant="primary" onClick={()=>this.accOrder()}>
                            Terima Pesanan
                        </Button>
                    </Modal.Footer>
                    ): (<div></div>)}
                </Modal>

               <ListGroup variant="flush">
                   {this.state.order.map((pesanan,index)=>{
                       pesanan.data.map((datas,index)=>{
                           console.log(datas.jumlah)
                       })
                       return(
                        <ListGroup.Item key={index} onClick={()=>this.openModal(pesanan)}>
                            <Row>
                                <Col>
                                    <div>
                                        <p style={{margin :0}}>Nama : {pesanan.nama}</p>
                                        <p style={{margin :0}}>Meja : {pesanan.meja}</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <p style={{margin :0}}>Jumlah Pesanan : {this.totalPesanan(pesanan.data)}</p>
                                        <p style={{margin :0}}>
                                            <Badge pill variant={`${this.cssConfirm(pesanan.status)}`}>
                                            {pesanan.status}
                                            </Badge>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            
                        </ListGroup.Item>
                        
                       )
                   })}
                </ListGroup>
           </div>
        )
    }
}

export default Pesanan;