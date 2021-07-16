import styled from 'styled-components';
import ImageComponent from './Image';

const GridViewContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;

  overflow: auto;
  margin-top: 20px;
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.section`
  width: 40%;
  position: relative;
  margin: 20px;
`;

export default function GridView({ pagedImages }) {
  return (
    <GridViewContainer>
      {pagedImages.map((img) => (
        <ImageContainer key={img.id}>
          <ImageComponent
            imgSrc={img.src.original}
            alt={`${img.photographer}-${img.id} photo`}
            width="300px"
            height="300px"
          />
        </ImageContainer>
      ))}
    </GridViewContainer>
  );
}
