import Image from 'next/image';

export default function ImageComponent({ imgSrc, alt, width, height }) {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      layout="responsive"

      // blurDataURL="data:..." automatically provided
      // Optionally allows to add a blurred version of the image while loading
      // placeholder="blur"
    />
  );
}
