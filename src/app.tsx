import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import image from '../public/img0.jpg';

export default function App(): JSX.Element {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <img src={image} style={{ width: '100px', height: '100px' }} alt="hwaboon" />
      <main>
        <label htmlFor="mode">{process.env.NODE_ENV}</label>
      </main>
      <button type="button" onClick={() => setDisplay((prev) => !prev)}>show</button>
      {display && <h1>Lulu</h1>}
    </ThemeProvider>
  );
}
