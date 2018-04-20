import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Faukemon from '../components/Faukemon'
import LitHop from '../components/LitHop'
import HatPics from '../components/HatPics'
import { Tab } from 'semantic-ui-react';

const projects = [<LitHop/>, <Faukemon/>, <HatPics/>]
class Project extends Component {
  state = {
    slideIndex: 0
  }

  slidechange = (n) => {
    if(this.state.slideIndex === 0 && n === -1){
      this.setState({slideIndex: projects.length - 1})
    }
    else if(this.state.slideIndex === projects.length - 1) {
      this.setState({slideIndex: 0})
    }
    else{
      this.setState({slideIndex: this.state.slideIndex + n})
    }
  }




  render(){
    return (
      <div className='ProjectContainer'>
        {projects[this.state.slideIndex]}
        <div className='Buttons'>
          <button onClick={() => this.slidechange(-1)}>Previous</button>
          <button onClick={() => this.slidechange(1)}> Next</button>
        </div>
      </div>
    )
  }
};

export default Project;

//
// componentDidMount(){
//   this.showDivs(this.state.slideIndex)
// }
//
// plusDivs = n => {
//   this.setState({slideIndex: this.state.slideIndex += n})
//   this.showDivs(this.state.slideIndex += n);
// }
//
// showDivs = (n) => {
// var i;
// var x = document.getElementsByClassName("slides");
// if (n > x.length) {this.state.slideIndex = 1}
// if (n < 1) {this.state.slideIndex = x.length}
// for (i = 0; i < x.length; i++) {
//    x[i].style.display = "none";
// }
// x[this.state.slideIndex-1].style.display = "block";
// }
