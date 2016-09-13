import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ClickableSlideshow from './ClickableSlideshow'
import {getPicUrls} from './api'
import {next, setUrls} from './actions'
import {connect} from 'react-redux'

class App extends Component {
  componentWillMount() {
      getPicUrls().then(urls => {
            this.props.dispatch(setUrls(urls))
            this.props.dispatch(next())
        }
      )
  }
  render() {
    return (
      <div className="App">
        <ClickableSlideshow /> 
      </div>
    );
  }
}

export default connect()(App);
