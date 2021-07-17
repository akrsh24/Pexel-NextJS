import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color  : #040F26;
  color:#ffffff;
}

a {
  color: inherit;
  text-decoration: none;
}

p{
  margin: 0;
  font-size: 0.8rem;
}

* {
  box-sizing: border-box;
}

.onHover{
  cursor: pointer;
  text-decoration: underline;
}

`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
