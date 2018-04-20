import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { List, Image, Icon, Embed } from 'semantic-ui-react';
import JsIcon from '../img/JS_Icon.jpg';
import RubyIcon from '../img/Ruby_Icon.png';
import PostgreSQL from '../img/postgreSQL_Logo.png';
import Sqlit3 from '../img/SQLite3Logo.png';
import HtmlCss from '../img/Html5_Css3.png';
import HatPicLogo from '../img/HatPicsLogo.jpg';
import HatPicsDemo from '../videos/HatPicsDemo.webm';

class HatPics extends Component {

  render(){

    return (
      <div className='ProjectLayout'>
        <div className='Technologies'>
          <h2 className='ProjectName'>Hat Pics</h2>
          <List>
            <List.Item>
              <Image avatar src={RubyIcon}/>
              <List.Content>
                <List.Header as='h3'>Ruby on Rails</List.Header>
                <List.Description>Social media app dedicated solely to hat pictures</List.Description>
                <List.Description>Produced fully in Ruby on Rails demostrating the Model View Controller pattern as well as creating a RESTful application</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src={Sqlit3}/>
              <List.Content>
                <List.Header as='h3'>SQLite3</List.Header>
                <List.Description>Utilizes active record methods to create a SQLite3 database</List.Description>
                <List.Description>Pictures, comments, and ratings are located in a SQL database</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src={PostgreSQL}/>
              <List.Content>
                <List.Header as='h3'>PostgreSQL</List.Header>
                <List.Description>Reformatted SQLite3 database for Heroku hosting</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src={HtmlCss}/>
              <List.Content>
                <List.Header as='h3'>HTML5/CSS3</List.Header>
                <List.Description>Uses the HTML/CSS framework of Bootstrap for UI</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </div>
        <div className='Demo'>
          <Embed icon='play' placeholder={HatPicLogo} url={HatPicsDemo}/>
          <p className='DemoText'>Click to play demo! Click <a href='https://github.com/KingGranger/Hat-Pics'>Here</a> for the full repo and <a href='https://hat-pics.herokuapp.com/'>Here</a> for live demo</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {...state}
}

export default connect(mapStateToProps, actions)(HatPics);
