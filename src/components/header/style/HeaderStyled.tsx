import styled from 'styled-components';

/* Header */
export const HeaderComponent = styled.div`
  z-index: 99;
  width: 100%;
  height: 8vh;
  background-color: #161616;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
/* Header > Inner */
export const HeaderInnerContent = styled.div<{
  length: number;
}>`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 5vh;
  content: '';
  .icon {
    margin-left: 5px;
    font-size: 4vh;
    color: white;
  }
  &:hover {
    cursor: pointer;
  }
  &:before {
    content: '';
    position: absolute;
    margin-top: 6vh;
    margin-left: 5px;
    width: 0;
    border-bottom: 3px solid white;
    transition: width 0.3s;
  }

  &:hover:before {
    content: '';
    cursor: pointer;
    width: ${props => 1.5 * props.length + 4}vh;
  }
`;

export const HeaderText = styled.p`
  margin-left: 10px;
  font-size: 2vh;
  text-shadow: 2px 4px 4px grey;
  font-weight: 700;
  color: white;
  user-select: none;
`;
