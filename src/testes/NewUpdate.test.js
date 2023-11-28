import {render, screen} from '@testing-library/react';
import NewUpdate from '../pages/NewUpdate';
import { BrowserRouter, Router } from 'react-router-dom';

describe('Testes da tela NewUpdate', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <NewUpdate/>
      </BrowserRouter>
    );
  });

  it('Existe card em NewUpdate?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

});