import { useEffect, useState } from 'react';

export default function useImageListByID(imageId) {
  const [imageInfo, setImageInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    const fetchImagesByID = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/images/${imageId}`);
        const fetchedImage = await res.json();
        setImageInfo(fetchedImage);
        setIsLoading(false);
      } catch (error) {
        setImageInfo([]);
        setIsError(true);
      }
    };
    if (imageId) fetchImagesByID();
  }, [imageId]);

  return { isLoading, isError, imageInfo };
}
