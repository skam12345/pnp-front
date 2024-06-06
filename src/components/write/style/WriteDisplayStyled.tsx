import styled from "styled-components";

export const WriteDisplayMainComponent = styled.div<{
    visible: boolean;
}>`
    position: absolute;
    bottom: 0;
    right: 20px;
    width: 40%;
    background-color: white;
    display: ${(props: any) => props.visible ? 'flex': 'none'};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const WriteDisplayTitleComponent = styled.div`
    width: 100%;
    height: 5vh;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #2b2b3d;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Pannel = styled.p<{
    fontColor?: string;
}>`
    font-size: 2.5vh;
    font-weight: 700;
    font-family: '돋움';
    color: ${(props: any) => props.fontColor ? props.fontColor: 'white'};
`;

export const WriteDisplayInputComponent = styled.div`
    width: 100%;
    height: 6vh;
    background-color: white;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const InputBox = styled.input`
    width: 90%;
    height: 80%;
    font-size: 1.5vh;
    font-weight: 500;
    font-family: '바탕';
`;

export const WriteDisplayContentComponent = styled.div`
    width: 100%;
    height: 40vh;
    background-color: white;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PoemArea = styled.textarea`
    width: 100%;
    height: 90%;
    font-size: 1.5vh;
    font-weight: 500;
    font-family: '바탕';
`;

export const WriteDisplayButtonComponent = styled.div`
    width: 100%;
    height: 5vh;
    background-color: #2b2b3d;
    padding-left: 10px;
    padding-right: 10px; 
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const RegisterButton = styled.button`
    width: 80px;
    height: 35px;
    background-color: white;
    font-size: 1.5vh;
    font-weight: 600;
    font-family: '돋움';
    color: black;
    &:hover {
        cursor: pointer;
        background-color: #888888;
        color: white;
    }
    
`;