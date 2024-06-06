import React from 'react';
import {
  HeaderComponent,
  HeaderInnerContent,
  HeaderText,
} from './style/HeaderStyled';

import { FaHome, FaImages } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { TfiWrite } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const headerContents = [
    { name: 'Home', path: '/' },
    { name: 'Picture', path: '/picture' },
    { name: 'Poem', path: '/poem' },
    { name: 'Exhibition', path: '/' },
  ];
  const headerIcons = [
    <FaHome className="icon" />,
    <FaImages className="icon" />,
    <TfiWrite className="icon" />,
    <IoEyeSharp className="icon" />,
  ];

  const goMove = (path: string) => {
    navigate(path);
  };
  return (
    <HeaderComponent>
      {headerContents.map((content: any, index: number) => (
        <HeaderInnerContent key={index} length={content.name.length}>
          <React.Fragment>
            {headerIcons[index] && headerIcons[index]}
            <HeaderText onClick={() => goMove(content.path)}>
              {content.name}
            </HeaderText>
          </React.Fragment>
        </HeaderInnerContent>
      ))}
    </HeaderComponent>
  );
};

export default Header;
