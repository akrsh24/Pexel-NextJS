import { useState } from 'react';
import { FcList, FcGrid } from 'react-icons/fc';
import styled from 'styled-components';
import Layout from '@/components/Layout';
import ListView from '@/components/ListView';
import GridView from '@/components/GridView';
import styles from '@/styles/HomePage.module.css';

const ViewOptionSection = styled.section`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;

  margin: 0 10%;
`;

export default function HomePage({ pagedImages }) {
  const [viewType, setViewType] = useState('list');

  return (
    <Layout viewType={viewType}>
      <ViewOptionSection>
        <FcList
          className={styles.viewIcons}
          onClick={() => setViewType('list')}
        />
        <FcGrid
          className={styles.viewIcons}
          onClick={() => setViewType('grid')}
        />
      </ViewOptionSection>
      {viewType === 'list' ? (
        <ListView pagedImages={pagedImages} />
      ) : (
        <GridView pagedImages={pagedImages} />
      )}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/images`);
  const pagedImages = await res.json();
  if (!pagedImages) {
    return {
      notFound: true,
    };
  }
  return {
    props: { pagedImages },
  };
}
