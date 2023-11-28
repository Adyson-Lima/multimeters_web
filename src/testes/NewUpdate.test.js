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

  it('Existe link Home em NewUpdate?', () => {
    expect(screen.getByTestId("mylink")).toBeInTheDocument();
  });

  it('Existe form em NewUpdate?', () => {
    expect(screen.getByTestId("myform")).toBeInTheDocument();
  });

  it('Existe input1 em NewUpdate?', () => {
    expect(screen.getByTestId("input1")).toBeInTheDocument();
  });

  it('Existe input2 em NewUpdate?', () => {
    expect(screen.getByTestId("input2")).toBeInTheDocument();
  });

});