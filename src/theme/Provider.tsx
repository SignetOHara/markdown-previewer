import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body, #root {
  height: 100%;
  width: 100%;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Rubik', sans-serif;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
  margin: 0.5rem 0
}
`;

export const Provider: React.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={{}}>
    <GlobalStyle />
    <Normalize />
    {children}
  </ThemeProvider>
);
