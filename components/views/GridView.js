import styled from 'styled-components';
import ImageList from '../image/ImageList';

const GridViewContainer = styled.article`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  overflow: auto;
  width: 100%;
  height: 100%;
`;

export default function GridView({ pagedImages, imgRef }) {
  return (
    <GridViewContainer>
      <ImageList pagedImages={pagedImages} imgRef={imgRef} />
    </GridViewContainer>
  );
}
