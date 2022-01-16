import { useState } from 'react';
import { DropDown, dropdownType } from '.';

export const Default = (args: dropdownType) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };
  return (
    <div>
      <DropDown {...args} value={value} setDropdonw={handleChange} title="Escolha uma opção" />
    </div>
  );
};

const props: dropdownType = {
  value: '',
  title: 'Escolha uma opção',
  options: [
    { key: '', label: 'Escolha um item' },
    { key: '1', label: 'Opção 1' },
    { key: '2', label: 'Opção 2' },
    { key: '3', label: 'Opção 3' },
  ],
  setDropdonw: () => {},
};

Default.args = props;

const stories = {
  title: 'components/base/DropDown',
  component: DropDown,
  argTypes: {},
};

export default stories;
