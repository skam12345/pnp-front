import React from 'react';
import { HiPlusCircle } from 'react-icons/hi';
import {
  WorkSpaceBodyWorkSpace,
  WorkSpaceContent,
  WorkSpaceText,
} from './style/WorkPlaceStyled';

interface props {
  contentText: string;
}
const WorkPlace = ({ contentText }: props) => {
  return (
    <WorkSpaceBodyWorkSpace>
      <WorkSpaceContent>
        <HiPlusCircle className="iconWork" />
        <WorkSpaceText>{contentText}</WorkSpaceText>
      </WorkSpaceContent>
    </WorkSpaceBodyWorkSpace>
  );
};

export default WorkPlace;
