import {React, useEffect} from 'react';
import { Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import {
	DrawerNavigationHeader,
	DrawerNavigation,
} from 'react-bootstrap-drawer';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

const CustomNavigation = (props) => {
    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
      }, []);

    
    let { path, url } = useRouteMatch();

    // return(
    //     <div style={{height : '100%'}}>
    //             <DrawerNavigation>
    //                 <Nav.Item style={{backgroundColor : 'skyblue', borderRadius : 5}}>
    //                     <Nav.Link href={`/`}>Home</Nav.Link>
    //                 </Nav.Item>
    //                 <Nav.Item>
    //                     <Nav.Link href={`/pesanan`}>Pesanan</Nav.Link>
    //                 </Nav.Item>
    //                 <Nav.Item >
    //                     <Nav.Link href={`/menu`}>Menu</Nav.Link>
    //                 </Nav.Item>
    //                 <Nav.Item>
    //                     <Nav.Link href={`/profil`}>Profile</Nav.Link>
    //                 </Nav.Item>
    //             </DrawerNavigation>
    //         </div>
    // )

    if(location.pathname==='/profil'){
        return (
            <div style={{height : '100%'}}>
                <DrawerNavigation>
                    <Nav.Item>
                        <Nav.Link href={`/`}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={`/pesanan`}>Pesanan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link href={`/menu`}>Menu</Nav.Link>
                    </Nav.Item>
                    <Nav.Item  style={{backgroundColor : 'skyblue', borderRadius : 5}} >
                        <Nav.Link href={`/profil`}>Profile</Nav.Link>
                    </Nav.Item>
                </DrawerNavigation>
            </div>
        );
    }else if (location.pathname==='/pesanan'){
        return(
            <div style={{height : '100%'}}>
                <DrawerNavigation>
                <Nav.Item>
                        <Nav.Link href={`/`}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{backgroundColor : 'skyblue', borderRadius : 5}} href={`/pesanan`}>
                        <Nav.Link>Pesanan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link href={`/menu`}>Menu</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={`/profil`}>Profile</Nav.Link>
                    </Nav.Item>
                </DrawerNavigation>
            </div>
        )
    }else if (location.pathname==='/menu'){
        return(
            <div style={{height : '100%'}}>
                <DrawerNavigation>
                    <Nav.Item>
                        <Nav.Link href={`/`}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={`/pesanan`}>Pesanan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{backgroundColor : 'skyblue', borderRadius : 5}}>
                        <Nav.Link href={`/menu`}>Menu</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={`/profil`}>Profile</Nav.Link>
                    </Nav.Item>
                </DrawerNavigation>
            </div>
        )
    }else{
        return(
            <div style={{height : '100%'}}>
                <DrawerNavigation>
                <Nav.Item style={{backgroundColor : 'skyblue', borderRadius : 5}}>
                        <Nav.Link href={`/`}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={`/pesanan`}>Pesanan</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link href={`/menu`}>Menu</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={`/profil`}>Profile</Nav.Link>
                    </Nav.Item>
                </DrawerNavigation>
            </div>
        )
    }
};

export default CustomNavigation;