import React from 'react'
import {Container, Col, Row, ListGroup, DropdownButton, Dropdown} from 'react-bootstrap'
import firebase from '../../firebase';
class Menu extends React.Component{

    state = {
        menus : [],
        menus2 : []
    }

    async componentDidMount(){
        this.getMenus()
        this.getMenus2()
    }

    getMenus = () => {
        const ref = firebase.firestore().collection("menuMakanan");
        ref.onSnapshot((querySnapshot)=> {
            const items = [];
            querySnapshot.forEach((doc)=> {
                items.push(doc.data());
            });
            this.setState({
                menus : items
            })
        })
    }

    getMenus2 = () => {
        const ref = firebase.firestore().collection("menuMinuman");
        ref.onSnapshot((querySnapshot)=> {
            const items = [];
            querySnapshot.forEach((doc)=> {
                items.push(doc.data());
            });
            this.setState({
                menus2 : items
            })
        })
    }

    render(){
        return(
            <div style={{padding : 40, height : '100vh', overflow : 'scroll'}}>
                {console.log(this.state)}
                <ListGroup variant="flush">
                   {this.state.menus.map((menus,index)=>{
                       return(
                        <ListGroup.Item key={index}>
                            <Row>
                                <Col xs={12} md={4} lg={4} style={{padding : 10}}>
                                    <div style={{width : 100, height : 100, display : 'flex', justifyContent : 'center', alignItems : 'center',overflow : 'hidden', borderRadius : 5}}>
                                        <img src={menus.gambar} style={{width : '100%', height : '100%', flexShrink : 0, }}/>
                                    </div>
                                </Col>
                                <Col style={{padding : 10}} xs={12} md={4} lg={4} style={{padding : 10}}>
                                    <div>
                                        <p style={{margin : 0}}>Nama : {menus.nama}</p>
                                        <p style={{margin : 0}}>Harga : {menus.harga}</p>
                                    </div>
                                </Col>
                                <Col style={{padding : 10}}>
                                    <div>
                                    <DropdownButton id="dropdown-basic-button" title="Action">
                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Hapus</Dropdown.Item>
                                    </DropdownButton>
                                    </div>
                                </Col>
                            </Row>
                            
                        </ListGroup.Item>
                        
                       )
                   })}
                   {this.state.menus2.map((menus,index)=>{
                       return(
                        <ListGroup.Item key={index}>
                            <Row>
                                <Col xs={12} md={4} lg={4} style={{padding : 10}}>
                                    <div style={{width : 100, height : 100, display : 'flex', justifyContent : 'center', alignItems : 'center',overflow : 'hidden', borderRadius : 5}}>
                                        <img src={menus.gambar} style={{width : '100%', height : '100%', flexShrink : 0, }}/>
                                    </div>
                                </Col>
                                <Col style={{padding : 10}} xs={12} md={4} lg={4} style={{padding : 10}}>
                                    <div>
                                        <p style={{margin : 0}}>Nama : {menus.nama}</p>
                                        <p style={{margin : 0}}>Harga : {menus.harga}</p>
                                    </div>
                                </Col>
                                <Col style={{padding : 10}}>
                                    <div>
                                    <DropdownButton id="dropdown-basic-button" title="Action">
                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Hapus</Dropdown.Item>
                                    </DropdownButton>
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

export default Menu;