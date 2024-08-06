import React, { useState } from 'react';
import Header from '@src/components/header';
import Counter from '@src/components/counter';
import image from '../../public/img0.jpg';

export default function App(): JSX.Element {
  const [display, setDisplay123] = useState<boolean>(false);

  const foo = 123;

  const onShow = () => {
    console.log('123');
    setDisplay123(true);
  };

  const onHide = () => {
    setDisplay123(false);
  };

  return (
    <>
      <Header />
      <Counter />
      <img src={image} style={{ width: '100px', height: '100px' }} alt='hwaboon' />
      <main>
        <label htmlFor='mode'>{process.env.NODE_ENV}</label>
      </main>
      <button type='button' onClick={onShow}>show</button>
      <button type='button' onClick={onHide}>hide</button>
      {display && <h1>Lulu</h1>}
    </>
  );
}
