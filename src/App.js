import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import Faukemon from './components/Faukemon'
import LitHop from './components/LitHop'
import HatPics from './components/HatPics'
import './App.css';
import Bio from './containers/Bio'
import { Message, Button } from 'semantic-ui-react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Home from './containers/Home';
import NavBar from './components/NavBar';
import Projects from './containers/Projects';


class App extends Component {
  state = {
    page: 1
  }

  handlePage = num => {
    this.setState({page:num})
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <NavBar handlePage={this.handlePage}/>
        {this.state.page === 1 ? <Home /> : null}
        {this.state.page === 2 ? <Bio /> : null}
        {this.state.page === 3 ? <Projects /> : null}


      </div>
    );
  }
}

const mapStateToProps = state => {

  return {...state}
}

export default connect(mapStateToProps, actions)(App);
