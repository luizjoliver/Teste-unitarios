import { render, screen } from '@testing-library/react';
import Menu from '.';

test('Deve renderizar um link para a pagina inicial ', () => {
  render(<Menu />);

  const linkPaginaInicia = screen.getByText('Inicial');

  expect(linkPaginaInicia).toBeInTheDocument();
});

test('Deve renderizar uma lista de  links', () => {
  render(<Menu />);

  const listaDeLinks = screen.getAllByRole('link');

  expect(listaDeLinks).toHaveLength(4);
});

test('Não deve renderizar o link para o extrato', () => {
  render(<Menu />);
  const linkExtrato = screen.queryByText('Extrato');

  expect(linkExtrato).not.toBeInTheDocument();
});

test('Deve renderizar uma lista de links com a classe "link" ' ,() =>{
    render(<Menu/>)

    const links = screen.getAllByRole("link");
    links.forEach((link) =>(
        expect(link).toHaveClass('link')
    ))
    expect(links).toMatchSnapshot()
});
