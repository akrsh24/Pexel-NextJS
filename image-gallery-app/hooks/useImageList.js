import { useEffect, useState } from 'react';
import { PAGE_SIZE } from '../config';

export default function useImageList(pageNumber) {
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    const fetchImages = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/images?per_page=${PAGE_SIZE}&page=${pageNumber}`
        );
        const pagedImages = await res.json();
        setImageList((prevImages) => [...prevImages, ...pagedImages.photos]);
        setHasMore(pageNumber * PAGE_SIZE < pagedImages.total_results);
        setIsLoading(false);
      } catch (error) {
        setImageList([]);
        setIsError(true);
      }
    };
    fetchImages();
  }, [pageNumber]);

  return { isLoading, isError, imageList, hasMore };
}
