import { useEffect, useState } from 'react';
import { environment, PAGE_SIZE } from '../config';
const env = process.env.NODE_ENV || 'development';

export default function useImageList(pageNumber) {
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  console.log('environment[env].API_URL', environment[env].API_URL);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    const fetchImages = async () => {
      try {
        const res = await fetch(
          `${environment[env].API_URL}/api/images?per_page=${PAGE_SIZE}&page=${pageNumber}`
        );
        const pagedImages = await res.json();
        setImageList((prevImages) => [...prevImages, ...pagedImages.photos]);
        setHasMore(pageNumber * PAGE_SIZE < pagedImages.total_results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error occured=>', error);
        setImageList([]);
        setIsError(true);
      }
    };
    fetchImages();
  }, [pageNumber]);

  return { isLoading, isError, imageList, hasMore };
}
