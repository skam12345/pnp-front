import styled, { keyframes } from 'styled-components';

export const ExhibitionSpaceComponent = styled.div`
  width: ${6 * 13}vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
  background-image: url(${require('../../../assets/image/exhibition/exhibition.gif')});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: background-color 1s;
  transition: background-image 1s;
  transition: opacity 1s;
  z-index: 5;
  content: '';
  &:after {
    content: '';
    display: block;
    padding-bottom: 45%;
  }
  margin-top: 3vh;
  &:hover {
    background-image: none;
    background-color: black;
    opacity: 1;
    cursor: pointer;
  }
  margin-bottom: 3vh;
`;

const ExhibitionKeyframe = keyframes`
  0% {
    filter: blur(20px);
    opacity: 0;
  }
  25% {
    filter: blur(0px);
    opacity: 1;
  }
  50% {
    filter: blur(0px);
    opacity: 1;
  }
  70% {
    filter: blur(0px);
    opacity: 1;
  }
  100% {
    filter: blur(20px);
    opacity: 0;
  }
`;

export const ExhibitionPlaceText = styled.p`
  font-size: 5.2vh;
  font-weight: 600;
  text-align: center;
  color: white;
  animation-duration: 5s;
  animation-name: ${ExhibitionKeyframe};
  animation-iteration-count: infinite;
  user-select: none;
`;
