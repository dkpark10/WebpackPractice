import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './app';

describe('count', () => {
  const getResult = () => {
    const result = render(<App />);
    return result;
  };

  test('increase', async () => {
    const result = getResult();
    const count = result.getByText('0');
    const button = result.getByText('increase');
    fireEvent.click(button);

    expect(count.textContent).toBe('1');
  });

  test('increase', async () => {
    const result = getResult();
    const count = result.getByText('0');
    const button = result.getByText('decrease');
    fireEvent.click(button);

    expect(count.textContent).toBe('-1');
  });

  test('show test', () => {
    const result = getResult();
    const showButton = result.getByText('show');

    fireEvent.click(showButton);
    const title = result.getByText('Lulu');
    expect(title).toBeInTheDocument();

    fireEvent.click(showButton);
    expect(title).not.toBeInTheDocument();
  });
});
