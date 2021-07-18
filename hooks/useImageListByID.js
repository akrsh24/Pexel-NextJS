import { useEffect, useState } from 'react';
import { environment } from '../config';
const env = process.env.NODE_ENV || 'development';

export default function useImageListByID(imageId) {
  const [imageInfo, setImageInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    const fetchImagesByID = async () => {
      try {
        const res = await fetch(
          `${environment[env].API_URL}/api/images/${imageId}`
        );
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
