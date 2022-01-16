import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DropDown } from '.';

const options = [
  { key: '', label: 'Escolha uma opção' },
  { key: '1', label: 'Opção 1' },
  { key: '2', label: 'Opção 2' },
  { key: '3', label: 'Opção 3' },
];

const setup = () => {
  const dropdonw = '';
  const setDropdonw = jest.fn();
  render(
    <>
      <DropDown value={dropdonw} title="Selecione um genero" options={options} setDropdonw={setDropdonw} />
    </>,
  );

  return setDropdonw;
};

describe('should render', () => {
  it('should render best name', async () => {
    setup();

    expect(screen.getByRole('button', { name: 'Escolha uma opção' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Escolha uma opção' })).toHaveAttribute('aria-expanded', 'false');
  });

  it('should render best name2', async () => {
    setup();

    userEvent.click(screen.getByRole('button', { name: 'Escolha uma opção' }));
    expect(screen.getByRole('button', { name: /Escolha uma opção/i })).toHaveAttribute('aria-expanded', 'true');

    expect(screen.getByRole('option', { name: options[1].label })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: options[2].label })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: options[3].label })).toBeInTheDocument();
  });

  it('should selected best name2', async () => {
    let setDropdonw = setup();

    userEvent.click(screen.getByRole('button', { name: 'Escolha uma opção' }));
    expect(setDropdonw).toHaveBeenCalledTimes(0);

    userEvent.click(screen.getByRole('option', { name: 'Opção 2' }));
    expect(setDropdonw).toHaveBeenCalledTimes(1);
    expect(setDropdonw).toHaveBeenCalledWith('2');

    expect(screen.getByRole('button', { name: /Escolha uma opção/i })).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('option', { name: 'Opção 1' })).not.toBeInTheDocument();
    expect(screen.queryByRole('option', { name: 'Opção 2' })).not.toBeInTheDocument();
    expect(screen.queryByRole('option', { name: 'Opção 3' })).not.toBeInTheDocument();
  });
});
