import styled from 'styled-components';
import ImageComponent from './Image';

const ListViewContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.section`
  width: 80%;
  position: relative;
  margin: 20px 0;
  border: 1px solid #ffffff;
`;

export default function ListView({ pagedImages = [], imgRef }) {
  return (
    <ListViewContainer>
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
    </ListViewContainer>
  );
}
