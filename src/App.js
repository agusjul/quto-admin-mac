import './App.css';
import React from 'react';
import firebase from './firebase';
import CustomPage from './components/Drawer/Custompage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{
  state={
    manus : []
  }

  async componentDidMount(){
    this.getPesanan()
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
            menus : items
        })
    })
}

  render(){
    return(
      <Router>
        <CustomPage/>
        {console.log(this.state.manus)}
      </Router>
    )
  }
}

export default App;
