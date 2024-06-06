import styled from 'styled-components';

export const WorkSpaceBodyWorkSpace = styled.div`
  z-index: 99;
  width: ${6 * 13}vh;
  border: 2px dashed white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d326;
  transition: background-color 1s;
  content: '';
  &:after {
    content: '';
    display: block;
    padding-bottom: 45%;
  }
  margin-top: 3vh;
  &:hover {
    background-color: black;
    cursor: pointer;
  }
`;

export const WorkSpaceContent = styled.div`
  width: 65%;
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .iconWork {
    color: white;
    font-weight: 900;
    font-size: 4vh;
  }
`;

export const WorkSpaceText = styled.p`
  font-size: 2vh;
  font-weight: 600;
  color: white;
  user-select: none;
`;
