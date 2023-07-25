import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import LetterR from '../Assets/LetterR.png';

const NavigationBar: React.FC = () => (
  <Menu stackable>
    <Menu.Item>
      <img alt="logo" src={LetterR} />
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>
        <Link to="/profile">
          <Icon name="user" />
        </Link>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default NavigationBar;
