import React from 'react'
import {Container, Col, Row, Card} from 'react-bootstrap'

class Dashboard extends React.Component{
    render(){
        return(
            <div style={{padding : 40, display : 'flex', flexWrap : 'wrap'}}>
                <Card style={{ width: '18rem', margin : 10 }}>
                    <Card.Body>
                        <Card.Title>Pesanan Diterima</Card.Title>
                        <Card.Text>
                            <h1 style={{fontSize : 56, marginBottom : 0, fontWeight : 'bold'}}>
                                10
                            </h1>
                        </Card.Text>
                        <Card.Link href="/pesanan">Lihat Daftar Pesanan</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin : 10}}>
                    <Card.Body>
                        <Card.Title>Pesanan Selesai</Card.Title>
                        <Card.Text>
                            <h1 style={{fontSize : 56, marginBottom : 0, fontWeight : 'bold'}}>
                                10
                            </h1>
                        </Card.Text>
                        <Card.Link href="/pesanan">Lihat Daftar Pesanan</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin : 10 }}>
                    <Card.Body>
                        <Card.Title>Daftar Menu</Card.Title>
                        <Card.Subtitle>Daftar Manu aktif</Card.Subtitle>
                        <Card.Text>
                            <h1 style={{fontSize : 56, marginBottom : 0, fontWeight : 'bold'}}>
                                5
                            </h1>
                        </Card.Text>
                        <Card.Link href="/menu">Lihat Daftar Menu</Card.Link>
                    </Card.Body>
                </Card>
        
            </div>
        )
    }
}

export default Dashboard;