import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Header from '../../components/header/Header';
import {
  AWS_S3_BUCKECT,
  IAM_ACESS_KEY_ID,
  IAM_REGION,
  IAM_SECRET_ACCESS_KEY,
} from '../../config/constant/AWSConfig';
import {
  InsertIcon,
  PictureCarousel,
  PictureGalleryImageListContainer,
  PictureGalleryInsertContainer,
  PictureGalleryMainComponent,
  PictureGalleryNoneListNotice,
  UploadButton,
} from './style/PictureGalleryStyled';

import AWS from 'aws-sdk';
import { useMutation, useQuery } from 'react-query';
import { IMG_URL } from '../../config/API_APP_URL';
import { fetchData, postData } from '../../service/APIEngine';

interface FileInfoType {
  url: string;
  image: boolean;
  video: boolean;
  file: File;
}

const PictureGallery = () => {
  const [files, setFiles] = useState<FileInfoType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [image, setImage] = useState<string[]>([]);

  AWS.config.update({
    accessKeyId: IAM_ACESS_KEY_ID,
    secretAccessKey: IAM_SECRET_ACCESS_KEY,
    region: IAM_REGION,
  });
  const s3 = new AWS.S3();

  const insertImgUpload = async () => {
    if (files.length === 0) return;
    const uploadPromise = files.map(({ file }) => {
      const params = {
        ACL: 'public-read',
        Bucket: AWS_S3_BUCKECT,
        Key: `photo/skam123/${file.name}`,
        Body: file,
      };
      return s3.upload(params).promise();
    });
    const results = await Promise.all(uploadPromise);
    const locations = results.map(result => result.Location);
    setImage(locations);
  };

  const checkFormImageFile = (e: any) => {
    const list: FileInfoType[] = [];
    const fileList = e.target.files;

    if (fileList) {
      for (let i = 0; i < fileList.length; i++) {
        list.push({
          url: URL.createObjectURL(fileList[i]),
          image: fileList[i].type.includes('image'),
          video: fileList[i].type.includes('video'),
          file: fileList[i],
        });
      }
    }
    setFiles(list);
  };

  const { mutate: uploadImgDB } = useMutation(
    async () =>
      await postData(
        '/upload-image',
        {
          uploadImgUrl: image,
          userId: 'skam123',
        },
        false,
        '',
      ),
    {
      onSuccess: () => {
        console.log('저장 완료');
      },
    },
  );

  const {
    data: imageData,
    error: imageError,
    isError: imageIsErorr,
    refetch: imageRefetch,
  } = useQuery(['read-all-img', [image]], async () => {
    let data = await fetchData(
      {
        id: 'skam123',
      },
      '/read-all-img',
    );
    return data?.data;
  });

  useEffect(() => {
    uploadImgDB();
  }, [image]);

  useEffect(() => {
    imageRefetch();
  }, [imageData]);

  return (
    <PictureGalleryMainComponent>
      <Header />
      <label htmlFor="insertImage">
        <PictureGalleryInsertContainer aria-hidden="true">
          <InsertIcon />
        </PictureGalleryInsertContainer>
        <input
          hidden
          type="file"
          multiple
          id="insertImage"
          onChange={e => checkFormImageFile(e)}
        />
      </label>
      <UploadButton onClick={() => insertImgUpload()}>업로드</UploadButton>

      <PictureGalleryImageListContainer>
        {imageData === null ? (
          <PictureGalleryNoneListNotice>
            등록된 사진이 없습니다...
          </PictureGalleryNoneListNotice>
        ) : (
          <PictureCarousel
            dynamicHeight={true}
            showStatus={true}
            infiniteLoop={false}
            showIndicators={false}
            onChange={(index: number) => setCurrentIndex(index)}
            thumbWidth={60}
          >
            {imageData?.map((picture: any, index: number) => (
              <div
                key={index}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              >
                <img
                  style={{
                    height: '20%',
                    objectFit: 'contain',
                    userSelect: 'none',
                  }}
                  src={`${IMG_URL}${picture}`}
                />
              </div>
            ))}
          </PictureCarousel>
        )}
      </PictureGalleryImageListContainer>
    </PictureGalleryMainComponent>
  );
};

export default PictureGallery;
