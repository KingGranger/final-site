import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { List, Image, Icon, Embed } from 'semantic-ui-react';
import ReactIcon from '../img/ReactIcon.png';
import RubyIcon from '../img/Ruby_Icon.png';
import PostgreSQL from '../img/postgreSQL_Logo.png';
import HtmlCss from '../img/Html5_Css3.png';
import LitHopLogo from '../img/lithop_logo.png';
import LitHopDemo from '../videos/Lit_Hop_Demo.webm';

class LitHop extends Component {

  render(){

    return (
        <div className='ProjectLayout'>
          <div className='Technologies'>
            <h2 className='ProjectName'>Lit Hop</h2>
            <List>
              <List.Item>
                <Image avatar src={ReactIcon}/>
                <List.Content>
                  <List.Header as='h3'>React</List.Header>
                  <List.Description>Creates a bar hopping route that the can customize and displays route on a map as well as gives instructions</List.Description>
                  <List.Description>Operates with Google maps React and Google places API to find establishments near the users location </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <Image avatar src={RubyIcon}/>
                <List.Content>
                  <List.Header as='h3'>Ruby on Rails</List.Header>
                  <List.Description>Produced with a Ruby on Rails backend Application Programming Inteface</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <Image avatar src={PostgreSQL}/>
                <List.Content>
                  <List.Header as='h3'>PostgreSQL</List.Header>
                  <List.Description>Utilizes active record methods to create a PostgreSQL database</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <Image avatar src={HtmlCss}/>
                <List.Content>
                  <List.Header as='h3'>HTML5/CSS3</List.Header>
                  <List.Description>Uses the HTML/CSS frameworks of semantic UI and materialize UI</List.Description>
                </List.Content>
              </List.Item>
            </List>
          </div>
          <div className='Demo'>
            <Embed icon='play' placeholder={LitHopLogo} url={LitHopDemo}/>
            <p className='DemoText'>Click to play demo! Click <a href='https://github.com/KingGranger/lit_hop_client'>Here</a> for the front-end repo and <a href='https://github.com/KingGranger/lit_hop_server'>Here</a> for back-end repo</p>
          </div>
        </div>

    )
  }
}

const mapStateToProps = state => {
  return {...state}
}

export default connect(mapStateToProps, actions)(LitHop);
