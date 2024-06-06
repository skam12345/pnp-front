import styled, { keyframes } from 'styled-components';

export const HomeGalleryParentComponent = styled.div<{
  image: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: black;
`;

export const HomeGalleryBackgroundComponent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  background-image: url(${require('../../../assets/background/backgroundImg.png')});
  background-size: 100% 100%;
  background-repeat: repeat;
  isolation: isolate;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0vh;
    width: 100%;
    height: 50vh;
    background-image: linear-gradient(
      -360deg,
      transparent 0 15%,
      black 80% 90%
    );
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0vh;
    width: 100%;
    height: 50vh;
    background-image: linear-gradient(180deg, transparent 0 15%, black 80% 90%);
  }
`;

/* Body */
export const HomeGalleryBodyComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const float = keyframes`
  0% {
    margin-top: 0px;
  }

  50% {
    margin-top: 10px;
  }

  100% {
    margin-top: 0px;
  }

`;

/* Body-inner */
export const HomeGalleryBodyMainTitle = styled.h1`
  position: absolute;
  top: -10vh;
  z-index: 99;
  font-size: 6vh;
  color: white;
  text-shadow: -1px -4px 2px grey;
  font-weight: 900;
  user-select: none;
  animation-name: ${float};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

/* Description */
export const HomeGalleryDescriptionContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  margin-top: 20vh;
`;

/* Left */
export const HomeGalleryDescriptionLeftContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LeftText = styled.p`
  font-family: '바탕';
  font-size: 4vh;
  font-weight: 700;
  color: #ffffff85;
  user-select: none;
`;

export const HomeGalleryDescriptionRightBackground = styled.div`
  position: relative;
  max-width: 50%;
  width: 50%;
  height: 50vh;
  background-image: url(${require('../../../assets/background/leafImg.png')});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 50vh;
    background-image: linear-gradient(360deg, transparent 0 55%, black 90% 90%);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -5vh;
    width: 100%;
    height: 50vh;
    background-image: linear-gradient(-90deg, transparent 0 55%, black 85% 90%);
  }
`;

/* Right */
export const HomeGalleryDescriptionRightContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const HomeGalleryDescriptionLeftBackground = styled.div`
  position: relative;
  max-width: 50%;
  width: 50%;
  height: 50vh;
  background-image: url(${require('../../../assets/background/PoemImage.png')});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 50vh;
    background-image: linear-gradient(
      -360deg,
      transparent 0 55%,
      black 90% 90%
    );
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: -20v;
    width: 100%;
    height: 50vh;
    background-image: linear-gradient(90deg, transparent 0 55%, black 85% 90%);
  }
`;

export const RightText = styled.p`
  font-family: '궁서';
  font-size: 3.2vh;
  text-align: center;
  font-weight: 700;
  color: #ffffff74;
  user-select: none;
`;

export const HomeGalleryDescriptionMiddleComponent = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeGalleryDescriptionBothComponent = styled.div`
  width: 25%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BothText = styled.p`
  font-family: '한컴초롱바탕';
  font-size: 2vh;
  text-align: center;
  font-weight: 700;
  color: #ffffff74;
  user-select: none;
  user-select: none;
`;

export const HomeGalleryDescriptionMiddleBackground = styled.div`
  position: relative;
  width: 50%;
  height: 40vh;
  background-image: url(${require('../../../assets/background/exhibition.png')});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 40vh;
    background-image: linear-gradient(90deg, transparent 0 55%, black 85% 90%);
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 40vh;
    background-image: linear-gradient(-90deg, transparent 0 55%, black 85% 90%);
  }
`;

export const HomeGalleryDescriptionStartComponent = styled.div`
  margin-bottom: 20vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50vh;
`;

export const StartText = styled.h1`
  margin-bottom: 80vh;
  font-family: '필기체';
  font-size: 10vh;
  filter: drop-shadow(16px 16px 20px blue) blur(0.5px);
  text-align: center;
  font-weight: 700;
  color: #ffffff77;
  user-select: none;
`;
