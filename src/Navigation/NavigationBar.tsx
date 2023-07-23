import React from 'react';
import { Menu } from 'semantic-ui-react';
import LetterR from '../Assets/LetterR.png';

const NavigationBar: React.FC = () => (
  <Menu stackable>
    <Menu.Item>
      <img alt="logo" src={LetterR} />
    </Menu.Item>
  </Menu>
);

export default NavigationBar;
