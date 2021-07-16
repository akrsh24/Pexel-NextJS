import Head from 'next/head';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* box-shadow: 5px 10px 18px #888888; */
  margin: ${(props) => (props.viewType === 'list' ? '0 30%' : '0 15%')};
`;

const LayoutNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const LayoutMain = styled.main`
  padding: 1rem 0;
  flex: 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  overflow: scroll;
`;

const LayoutFooter = styled.footer`
  width: 100%;
  height: 50px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;

export default function Layout({
  title,
  keywords,
  content,
  description,
  children,
  viewType,
}) {
  return (
    <LayoutContainer viewType={viewType}>
      <Head>
        <title>{title}</title>
        <meta name={description} content={content} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutNav>
        <h1>Pexels Image Gallery</h1>
      </LayoutNav>
      <LayoutMain>{children}</LayoutMain>
      <LayoutFooter>
        <a
          href="https://www.pexels.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Photos provided by Pexels{' '}
        </a>
      </LayoutFooter>
    </LayoutContainer>
  );
}
