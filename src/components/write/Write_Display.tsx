import React from 'react';
import { InputBox, Pannel, PoemArea, RegisterButton, WriteDisplayButtonComponent, WriteDisplayContentComponent, WriteDisplayInputComponent, WriteDisplayMainComponent, WriteDisplayTitleComponent } from "./style/WriteDisplayStyled";

const WriteDisplay = ({visible, setVisible}: { visible: boolean, setVisible: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const registerPoem  = () => {
        setVisible(false);
    }
    
    return (
        <WriteDisplayMainComponent visible={visible}>
            <WriteDisplayTitleComponent>
                <Pannel>새로운 시 등록하기</Pannel>
            </WriteDisplayTitleComponent>
            <WriteDisplayInputComponent>
                <Pannel fontColor={'black'}>제목</Pannel>
                <InputBox type="text" placeholder="제목을 입력해주세요." />
            </WriteDisplayInputComponent>
            <WriteDisplayInputComponent>
                <Pannel fontColor={'black'}>저자</Pannel>
                <InputBox type="text" placeholder="저자를 입력해주세요." />
            </WriteDisplayInputComponent>
            <WriteDisplayContentComponent>
                <PoemArea placeholder="시의 내용을 입력하세요." />
            </WriteDisplayContentComponent>
            <WriteDisplayButtonComponent>
                <RegisterButton onClick={() => registerPoem()}>시 등록</RegisterButton>
            </WriteDisplayButtonComponent>
        </WriteDisplayMainComponent>
    );
}

export default WriteDisplay;