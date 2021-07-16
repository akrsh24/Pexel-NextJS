import Image from 'next/image';
import styled from 'styled-components';

const StyledImage = styled(Image)`
  &:hover {
    cursor: pointer;
  }
`;

export default function ImageComponent({
  imgSrc,
  alt,
  width,
  height,
  handleClick,
}) {
  return (
    <StyledImage
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      layout="responsive"
      onClick={handleClick}
      // blurDataURL="data:..." automatically provided
      // Optionally allows to add a blurred version of the image while loading
      // placeholder="blur"
    />
  );
}
