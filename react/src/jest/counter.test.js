// Teste.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Teste from '../test/teste';
import { change } from '../redux/slice';

const mockStore = configureStore([]);

describe('Teste', () => {
  let store;

  beforeEach(() => {
    store = mockStore({}); // Configurar o estado inicial do Redux conforme necessário
  });

  test('Renderiza o componente corretamente', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Teste />
      </Provider>
    );

    expect(getByText('Dispatch com Parâmetros')).toBeInTheDocument();
  });

  test('Atualiza o estado do input corretamente', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Teste />
      </Provider>
    );

    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Novo Valor' } });

    expect(input.value).toBe('Novo Valor');
  });

  test('Dispatch da ação com parâmetros corretos', () => {
    const { getByRole, getByText } = render(
      <Provider store={store}>
        <Teste />
      </Provider>
    );

    const input = getByRole('textbox');
    const button = getByText('Dispatch com Parâmetros');

    fireEvent.change(input, { target: { value: 'Novo Valor' } });
    fireEvent.click(button);

    const expectedAction = change('Novo Valor', 'Valor2');
    const actions = store.getActions();

    expect(actions).toEqual([expectedAction]);
  });
});
