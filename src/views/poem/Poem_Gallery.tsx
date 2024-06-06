import React, { useCallback, useState } from 'react';
import Header from "../../components/header/Header";
import { LeftArrow, PagingNumber, PoemGalleryBodyComponent, PoemGalleryBodyInnerComponent, PoemGalleryMainComponent, PoemTable, PoemTableData, PoemTableHead, PoemTableRow, RightArrow, TablePagingComponent, TablePagingNumberComponent, WritePoemButton } from "./style/PoemGalleryStyled";
import { BiPencil } from "react-icons/bi";
import WriteDisplay from '../../components/write/Write_Display';
const PoemGallery = () => {
    const [ writePoems, setWritePoems] = useState<object[]>([]);
    const [visible, setVisible] = useState(false);
    const viewWritePoems = useCallback(() => {
        if(writePoems) {
            return (
                <PoemTable>
                    <PoemTableRow height={2}>
                        <PoemTableHead width={3}>순번</PoemTableHead>
                        <PoemTableHead width={20}>제목</PoemTableHead>
                        <PoemTableHead width={5}>저자</PoemTableHead>
                        <PoemTableHead width={6}>등록일자</PoemTableHead>
                        <PoemTableHead width={3}>조회</PoemTableHead>
                        <PoemTableHead width={3}>좋아요</PoemTableHead>
                    </PoemTableRow>
                    <PoemTableRow height={40}>      
                        <PoemTableData colSpan={6} style={{textAlign: 'center'}}>-----------등록된 시가 없습니다-----------</PoemTableData>
                    </PoemTableRow>
                </PoemTable>
            );

        }
        return (
            <PoemTable>
                    <PoemTableRow height={2}>
                        <PoemTableHead width={3}>순번</PoemTableHead>
                        <PoemTableHead width={20}>제목</PoemTableHead>
                        <PoemTableHead width={5}>저자</PoemTableHead>
                        <PoemTableHead width={6}>등록일자</PoemTableHead>
                        <PoemTableHead width={3}>조회</PoemTableHead>
                        <PoemTableHead width={3}>좋아요</PoemTableHead>
                    </PoemTableRow>
                    <PoemTableRow height={30}>      
                    </PoemTableRow>
                    <PoemTableRow>      
                    </PoemTableRow>
                </PoemTable>
        )
    }, [writePoems]);

    return (
        <PoemGalleryMainComponent>
            <Header />
            <PoemGalleryBodyComponent>
                <PoemGalleryBodyInnerComponent>
                    {viewWritePoems()}
                    <TablePagingComponent>
                        <LeftArrow />
                        <TablePagingNumberComponent>
                            <PagingNumber>1</PagingNumber>
                        </TablePagingNumberComponent>
                        <RightArrow />
                    </TablePagingComponent>
                    <WritePoemButton onClick={() => setVisible(true)}><BiPencil />시 쓰기</WritePoemButton>
                </PoemGalleryBodyInnerComponent>
            </PoemGalleryBodyComponent>
            <WriteDisplay visible={visible} setVisible={setVisible} />
        </PoemGalleryMainComponent>
    );
}

export default PoemGallery;