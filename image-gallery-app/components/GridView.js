import styled from 'styled-components';
import ImageComponent from './Image';

const GridViewContainer = styled.article`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  overflow: auto;
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.section`
  width: 80%;
  position: relative;
  margin: 20px;
  border: 1px solid #ffffff;
`;

export default function GridView({ pagedImages, imgRef }) {
  return (
    <GridViewContainer>
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
    </GridViewContainer>
  );
}
