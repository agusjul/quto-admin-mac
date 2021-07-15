import React from 'react'
import {Container, Col, Row, Card, ListGroup, Badge} from 'react-bootstrap'
import firebase from '../../firebase'
class Pesanan extends React.Component{
    state={
        order : []
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


    render(){
        return(
           <div style={{padding : 40}}>

               <ListGroup variant="flush">
                   {this.state.order.map((pesanan,index)=>{
                       pesanan.data.map((datas,index)=>{
                           console.log(datas.jumlah)
                       })
                       return(
                        <ListGroup.Item key={index}>
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