import styled from "styled-components";
import styles from 'styled-components';

import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";

/* Main */
export const PoemGalleryMainComponent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

/* Body  */
export const PoemGalleryBodyComponent = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

/* Body Inner */
export const PoemGalleryBodyInnerComponent = styled.div`
    position: relative;
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const PoemTable =  styled.table`
    width: 100%;
    height: 80%;
    border: 1px solid white;
`;

export const PoemTableRow = styled.tr<{
    height?: number;
}>`
height: ${(props: any) => props.height ? props.height : 6}vh;
`;

export const PoemTableHead = styled.th<{
    width?: number;
}>`
    width: ${(props: any) => props.width ? props.width : 4}vh;
    font-size: 2.5vh;
    font-weight: 700;
    background-color: white;
    color: black;
    user-select: none;
`;

export const PoemTableData = styled.td`
    font-size: 2.5vh;
    font-weight: 500;
    color: black;
    background-color: #d4d4d4;
    user-select: none;
`;

/* Table Paging */
export const TablePagingComponent = styled.div`
    width: 45%;
    height: 4.5vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`; 

export const TablePagingNumberComponent = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const PagingNumber = styled.p`
    font-size: 2vh;
    font-weight: 500;
    color: white;
`;

export const LeftArrow = styles(IoMdArrowDropleftCircle)`
    font-size: 3.5vh;
    font-weight: 700;
    color: white;
`;

export const RightArrow = styles(IoMdArrowDroprightCircle)`
    font-size: 3.5vh;
    font-weight: 700;
    color: white;
`;

/* other */
export const WritePoemButton = styled.button`
    position: absolute;
    bottom: 40px;
    right: 0;
    width: 90px;
    height: 35px;
    border-radius: 8px;
    background-color: white;
    font-size: 1.6vh;
    font-weight: 700;
    color: black;
    font-family: '돋움';
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    &:hover {
        cursor: pointer;
        background-color: #858585;
        color: white;
    }
`; 
