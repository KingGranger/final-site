import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AboutMe from '../components/AboutMe';
import BioPic from '../img/IMG_0031.png';

class Bio extends Component {

  backGround = () => {
  //  return  {background: url(`../${this.props.background}`)}
  }
  render(){
    console.log(this.props)

    return(
      <div className="Bio" >
        <img className='BioImage' src={BioPic} alt='BioPic' style={{width: `100%`}}/>
        <AboutMe />

      </div>
    )
  }
}

const mapStateToProps = state => {

  return {...state}
}

export default connect(mapStateToProps, actions)(Bio)
