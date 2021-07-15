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
  

  render(){
    return(
      <Router>
        <CustomPage/>
      </Router>
    )
  }
}

export default App;
