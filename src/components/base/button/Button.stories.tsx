import { Button, buttonType } from '.';
import { action } from '@storybook/addon-actions';

export const Default = (args: buttonType) => (
  <>
    <div>
      <Button {...args} />
      <Button {...args} />
      <Button {...args} />
    </div>
  </>
);

const props: buttonType = {
  children: 'Likes 35',
  small: false,
  onClick: action('onClick'),
};

Default.args = props;

const stories = {
  title: 'components/base/Button',
  component: Button,
  argTypes: {},
};

export default stories;
