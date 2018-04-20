import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Name from '../components/Name';
import Me from '../img/me.jpg';

const Home = () => {

  return (
    <div>
    <div className='Home'>
      <h1 className='Occupation'>Full Stack Engineer</h1>
      <Name />
      <img src={Me} style={{ width: `100%` }} alt='Me' className='HomePic' />
      <p className='Motto'>Creating one next generation application at a time! <br/><p className='MottoContact'>Contact me!</p></p>
        <div className='LinkedInButton'>
          <a href="https://www.linkedin.com/in/brandon-harris-62338611a/">
            <Button color='linkedin' size='massive' animated='vertical'>
              <Button.Content visible><Icon name='linkedin'></Icon></Button.Content>
              <Button.Content hidden>linkedin</Button.Content>
            </Button>
          </a>
        </div>
        <div className='GithubButton'>
          <a href="https://github.com/KingGranger">
            <Button size='massive' animated='vertical'>
              <Button.Content visible><Icon name='github'></Icon></Button.Content>
              <Button.Content hidden>Git Hub</Button.Content>
            </Button>
          </a>
        </div>
        <div className='TwitterButton' >
          <a href='https://twitter.com/BTH_Goes_Live'>
            <Button color='twitter' size='massive' animated='vertical'>
              <Button.Content visible><Icon name='twitter'></Icon></Button.Content>
              <Button.Content hidden>Twitter</Button.Content>
            </Button>
          </a>
        </div>
      </div>
      <div className='BottomButtons'>
        <div className='MediumButton' >
          <a href='https://medium.com/@brandonharris_97411'>
            <Button color='black' size='massive' animated='vertical'>
              <Button.Content visible><Icon name='medium'></Icon></Button.Content>
              <Button.Content hidden>Medium</Button.Content>
            </Button>
          </a>
        </div>
        <div className='InstagramButton' >
          <a href='https://www.instagram.com/_benin_/'>
            <Button color='instagram' size='massive' animated='vertical'>
              <Button.Content visible><Icon name='instagram'></Icon></Button.Content>
              <Button.Content hidden>Instagram</Button.Content>
            </Button>
          </a>
        </div>
      </div>
      </div>
  )
};

export default Home;
