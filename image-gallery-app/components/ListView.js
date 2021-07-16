import styled from 'styled-components';
import ImageComponent from './Image';

const ListViewContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;

  overflow: auto;
  margin-top: 20px;
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.section`
  width: 80%;
  position: relative;
  margin: 20px 0;
`;

export default function ListView({ pagedImages }) {
  return (
    <ListViewContainer>
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
    </ListViewContainer>
  );
}
