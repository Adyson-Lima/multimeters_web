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

  it('Existe Link Novo em Multimeters?', () => {
    expect(screen.getByTestId("mylink")).toBeInTheDocument();
  });

});


