import React from 'react';
import {
  BothText,
  HomeGalleryBackgroundComponent,
  HomeGalleryBodyComponent,
  HomeGalleryBodyMainTitle,
  HomeGalleryDescriptionBothComponent,
  HomeGalleryDescriptionContainer,
  HomeGalleryDescriptionLeftBackground,
  HomeGalleryDescriptionLeftContainer,
  HomeGalleryDescriptionMiddleBackground,
  HomeGalleryDescriptionMiddleComponent,
  HomeGalleryDescriptionRightBackground,
  HomeGalleryDescriptionRightContainer,
  HomeGalleryDescriptionStartComponent,
  HomeGalleryParentComponent,
  LeftText,
  RightText,
  StartText,
} from './style/HomeGalleryStyled';

import ExhibitionPlace from '../../components/exihibition/ExhibitionPlace';
import Header from '../../components/header/Header';
import WorkPlace from '../../components/workplace/WorkPlace';

const HomeGallery = () => {
  const backgroundImg = '../../assets/background/backgroundImg.png';
  const Leaf = require('../../assets/background/leafImg.png');
  return (
    <HomeGalleryParentComponent image={backgroundImg}>
      <Header />
      <HomeGalleryDescriptionContainer>
        <HomeGalleryDescriptionLeftContainer>
          <LeftText>사진 저장소는 자신만의 추억을</LeftText>
          <LeftText>작은 나만의 사진첩으로</LeftText>
          <LeftText>만드는 공간입니다.</LeftText>
        </HomeGalleryDescriptionLeftContainer>
        <HomeGalleryDescriptionRightBackground />
      </HomeGalleryDescriptionContainer>
      <HomeGalleryDescriptionContainer style={{ marginBottom: '40vh' }}>
        <HomeGalleryDescriptionLeftBackground />
        <HomeGalleryDescriptionRightContainer>
          <RightText>전자 시집 저장소는 자신만의 감정을</RightText>
          <RightText>글로 표현하여 하루하루를 힐링할 수 있도록</RightText>
          <RightText>그리고 자신이 성장해 나가는 과정을</RightText>
          <RightText>기록하는 공간입니다.</RightText>
        </HomeGalleryDescriptionRightContainer>
      </HomeGalleryDescriptionContainer>
      <HomeGalleryDescriptionMiddleComponent>
        <HomeGalleryDescriptionBothComponent>
          <BothText>전시회에서는</BothText>
          <BothText>사진 뿐만 아니라 시를 동시에</BothText>
          <BothText>맛볼 수 있는</BothText>
          <BothText>유저들만의 자유로운 공간입니다.</BothText>
        </HomeGalleryDescriptionBothComponent>
        <HomeGalleryDescriptionMiddleBackground />
        <HomeGalleryDescriptionBothComponent>
          <BothText>전시회라는 자유로운 연회 안에서</BothText>
          <BothText>사진과 시를 통해 힐링하며</BothText>
          <BothText>유저들과 소통하세요</BothText>
        </HomeGalleryDescriptionBothComponent>
      </HomeGalleryDescriptionMiddleComponent>
      <HomeGalleryDescriptionStartComponent>
        <StartText>추억의 바다로 여행을 가보시겠습니까?</StartText>
        <StartText>이 공연의 무대의 주인공은 당신입니다.</StartText>
        <StartText>지금부터 시작하세요!</StartText>
      </HomeGalleryDescriptionStartComponent>
      <HomeGalleryBackgroundComponent>
        <HomeGalleryBodyComponent>
          <HomeGalleryBodyMainTitle>
            나만의 작은 사진 & 시집 저장소
          </HomeGalleryBodyMainTitle>
          <WorkPlace contentText="나만의 작은 사진첩에 새로운 출발을 내딛으세요!" />
          <WorkPlace contentText="나만의 작은 시집에 첫 업적을 세워보세요!" />
          <ExhibitionPlace />
        </HomeGalleryBodyComponent>
      </HomeGalleryBackgroundComponent>
    </HomeGalleryParentComponent>
  );
};

export default HomeGallery;
