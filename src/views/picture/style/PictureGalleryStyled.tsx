import { MdAddAPhoto } from 'react-icons/md';
import { Carousel } from 'react-responsive-carousel';
import { default as styled, default as styles } from 'styled-components';
export const PictureGalleryMainComponent = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: black;
`;

/* Image List */

export const PictureGalleryImageListContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* Image List Inner */

export const PictureGalleryNoneListNotice = styled.p`
  font-family: '바탕';
  font-size: 5vh;
  font-weight: 700;
  color: white;
`;

export const PictureGalleryListImageParrent = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PictureGalleryListImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
`;

export const PictureCarousel = styles(Carousel)`
  position: absolute;
  top: 10%;
  width: 75%;
  height: 90%;
`;

/* other */

export const PictureGalleryInsertContainer = styled.div`
  position: absolute;
  z-index: 99;
  width: 60px;
  height: 60px;
  top: 10vh;
  right: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InsertIcon = styles(MdAddAPhoto)`
  color: white;
  font-size: 5.5vh;
  font-weight: 700;
  &:hover {
    cursor: pointer;
    color: grey;
  }
`;

export const UploadButton = styled.button`
  position: absolute;
  z-index: 99;
  width: 60px;
  height: 20px;
  top: 23vh;
  right: 2vh;
  border-radius: 5px;
  background-color: white;
  font-size: 1.5vh;
  color: black;
  font-weight: 700;
  font-family: '돋움';
  &:hover {
    cursor: pointer;
    background-color: #808080e0;
  }
`;
