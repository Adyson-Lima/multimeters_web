import { render, screen } from '@testing-library/react';
import Multimeters from '../pages/Multimeters';
import { BrowserRouter } from 'react-router-dom';

describe("Testes da tela Multimeters", () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Multimeters/>
      </BrowserRouter>
    );
  });

  it("Existe card em Multimeters?", () => {
    expect(screen.getByTestId("mycard")).toBeInTheDocument();
  });

  it('Existe link Novo em Multimeters?', () => {
    expect(screen.getByTestId("mylink")).toBeInTheDocument();
  });

  it('Existe tabela em Multimeters?', () => {
    expect(screen.getByTestId("mytable")).toBeInTheDocument();
  });

  it('Existe botão Editar em Multimeters?', () => {
    expect(screen.getByTestId("mybtn1")).toBeInTheDocument();
  });

});


