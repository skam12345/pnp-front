import React, { useEffect, useState } from 'react';

import { EXHIBITION_CONTENT } from '../../config/constant/Often';
import {
  ExhibitionPlaceText,
  ExhibitionSpaceComponent,
} from './style/ExhibitionPlaceStyled';

const ExhibitionPlace = () => {
  const [contentText, setContentText] = useState('');

  const changeExhibitionText = (i: number) => {
    setContentText(EXHIBITION_CONTENT[i]);
  };

  useEffect(() => {
    let i = 0;
    setInterval(() => {
      changeExhibitionText(i);
      i++;
      if (i > EXHIBITION_CONTENT.length) i = 0;
    }, 5000);
  }, []);

  return (
    <ExhibitionSpaceComponent>
      <ExhibitionPlaceText>{contentText}</ExhibitionPlaceText>
    </ExhibitionSpaceComponent>
  );
};

export default ExhibitionPlace;
