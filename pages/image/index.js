import { useRef, useState, useCallback, useEffect } from 'react';
import { FcList, FcGrid } from 'react-icons/fc';
import styled from 'styled-components';
import Layout from '@/components/layout/Layout';
import ListView from '@/components/views/ListView';
import GridView from '@/components/views/GridView';
import useImageList from 'hooks/useImageList';
import styles from '@/styles/HomePage.module.css';
import { environment, PAGE_SIZE } from '@/config/index';
const env = process.env.NODE_ENV || 'development';

const ViewOptionSection = styled.section`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;

  margin: 0 10%;
`;

const Divider = styled.hr`
  width: 100%;
`;

export default function HomePage({ images }) {
  const [viewType, setViewType] = useState('list');
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, imageList, hasMore } = useImageList(pageNumber);
  const [pagedImages, setPagedImages] = useState(images);

  useEffect(() => {
    console.log(`${environment[env].API_URL}`);
    if (imageList.length) setPagedImages(imageList);
    else setPagedImages(images);
  }, [imageList, images]);

  const observer = useRef();
  const lastImageForAPageRef = useCallback(
    (node) => {
      //if loading, just return back
      if (isLoading) return;

      //if there's an observer just disconnect it for new last item to be connected.
      if (observer.current) observer.current.disconnect();

      //observer-intersection pattern, find the first entry and when callback runs , increment pageNumber
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPage) => prevPage + 1);
        }
      });

      //just observe node
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  const handleViewOptionClick = (opt) => {
    setViewType(opt);
    setPageNumber(1);
  };

  return (
    <Layout viewType={viewType}>
      <ViewOptionSection>
        <FcList
          className={styles.viewIcons}
          onClick={() => handleViewOptionClick('list')}
        />
        <FcGrid
          className={styles.viewIcons}
          onClick={() => handleViewOptionClick('grid')}
        />
      </ViewOptionSection>
      <Divider />
      <div style={{ height: '100%', width: '100%' }} id="img-section">
        {viewType === 'list' ? (
          <ListView pagedImages={pagedImages} imgRef={lastImageForAPageRef} />
        ) : (
          <GridView pagedImages={pagedImages} imgRef={lastImageForAPageRef} />
        )}
      </div>
      <div>{isLoading && 'Loading...'}</div>
      <div>{isError && 'Something went wrong'}</div>
    </Layout>
  );
}

export async function getServerSideProps() {
  console.log('Server', `${environment[env].API_URL}`);
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=people&per_page=10&page=1`,
    {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_PEXEL_API_KEY,
      },
    }
  );
  const pagedImages = await res.json();
  return {
    props: {
      images: pagedImages.photos,
    },
  };
}
