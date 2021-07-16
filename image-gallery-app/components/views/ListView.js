import styled from 'styled-components';
import ImageList from '../image/ImageList';

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

export default function ListView({ pagedImages = [], imgRef }) {
  return (
    <ListViewContainer>
      <ImageList pagedImages={pagedImages} imgRef={imgRef} />
    </ListViewContainer>
  );
}
