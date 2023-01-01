import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './app';
import Counter from './components/counter';

describe('메인 테스트', () => {
  const getResult = () => {
    const result = render(<App />);
    return result;
  };

  test('보여주기 테스트', async () => {
    const result = getResult();
    const showButton = result.getByText('show');
    const hideButton = result.getByText('hide');

    fireEvent.click(showButton);
    const title = result.getByText('Lulu');

    expect(title).toBeInTheDocument();

    fireEvent.click(hideButton);
    expect(title).not.toBeInTheDocument();
  });
});

describe('단일 컴포넌트 카운터 테스트', () => {
  const getResult = () => {
    const result = render(<Counter />);
    return result;
  };

  test('카운터 증가 테스트', async () => {
    const result = getResult();
    const count = result.getByText('0');
    const button = result.getByText('증가');
    fireEvent.click(button);
    expect(count.textContent).toBe('1');
  });

  test('카운터 감소 테스트', async () => {
    const result = getResult();
    const count = result.getByText('0');
    const button = result.getByText('감소');
    fireEvent.click(button);
    expect(count.textContent).toBe('-1');
  });
});
