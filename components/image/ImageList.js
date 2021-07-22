import { useRouter } from 'next/router';
import styled from 'styled-components';
import ImageComponent from './ImageComponent';

export const ImageContainer = styled.section`
  width: ${(props) => props.customWidth || '80%'};
  position: relative;
  margin: 20px;
  border: 1px solid #ffffff;
`;

export default function ImageList({ pagedImages, imgRef }) {
  const router = useRouter();

  const handleImageClick = (imageId) => {
    router.push(`/image/${imageId}`);
  };

  return (
    <>
      {pagedImages.map((img, index) => {
        if (pagedImages.length === index + 1) {
          return (
            <ImageContainer key={`${img.id}-${index}`} ref={imgRef}>
              <ImageComponent
                imgSrc={img.src.original}
                alt={`${img.photographer}-${img.id} photo`}
                width="200px"
                height="200px"
                handleClick={() => handleImageClick(img.id)}
              />
            </ImageContainer>
          );
        } else {
          return (
            <ImageContainer key={`${img.id}-${index}`}>
              <ImageComponent
                imgSrc={img.src.original}
                alt={`${img.photographer}-${img.id} photo`}
                width="200px"
                height="200px"
                handleClick={() => handleImageClick(img.id)}
              />
            </ImageContainer>
          );
        }
      })}
    </>
  );
}
