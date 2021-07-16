import Image from 'next/image';
export default function Loader({ isLoading }) {
  return (
    <>
      {isLoading ? (
        <Image
          src="../public/images/loaderGIF.gif"
          alt="loader gif"
          layout="fill"
        />
      ) : (
        <></>
      )}
    </>
  );
}
