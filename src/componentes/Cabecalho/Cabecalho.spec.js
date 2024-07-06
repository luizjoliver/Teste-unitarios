import { render, screen } from '@testing-library/react';
import Cabecalho from './index.jsx';

test('Primeiro teste ', () => {
  const numero = 10;

  expect(numero).toBe(10);
});

test('testando componente react ', () => {
  render(<Cabecalho />);
  const nomeUsario = screen.getByText('Joana Fonseca Gomes');

  expect(nomeUsario).toBeInTheDocument();
});
