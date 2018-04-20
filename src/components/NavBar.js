import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


const NavBar = ({handlePage}) => {

  return (
    <div className='NavBar'>
      <Menu fluid size='massive' inverted tabular>
        <Menu.Item name="Me" onClick={()=>handlePage(1)}>

        </Menu.Item>
        <Menu.Item name="Bio" onClick={()=>handlePage(2)}>

        </Menu.Item>
        <Menu.Item name="Projects" onClick={()=>handlePage(3)}>
          
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default NavBar;
