import styled from 'styled-components';
import ImageComponent from './ImageComponent';

const ImageContainer = styled.section`
  width: 80%;
  position: relative;
  margin: 20px;
  border: 1px solid #ffffff;
`;

export default function ImageList({ pagedImages, imgRef }) {
  return (
    <>
      {pagedImages.map((img, index) => {
        if (pagedImages.length === index + 1) {
          return (
            <ImageContainer key={img.id} ref={imgRef}>
              <ImageComponent
                imgSrc={img.src.original}
                alt={`${img.photographer}-${img.id} photo`}
                width="200px"
                height="200px"
              />
            </ImageContainer>
          );
        } else {
          return (
            <ImageContainer key={img.id}>
              <ImageComponent
                imgSrc={img.src.original}
                alt={`${img.photographer}-${img.id} photo`}
                width="200px"
                height="200px"
              />
            </ImageContainer>
          );
        }
      })}
    </>
  );
}
