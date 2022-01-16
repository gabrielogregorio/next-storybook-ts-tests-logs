import { ChannelsComponent, channelsPropsType, channelsType } from '.';

export const Default = (args: channelsType) => {
  return (
    <div>
      <ChannelsComponent channels={[]} {...args} />
    </div>
  );
};

const props: channelsPropsType = {
  channels: [
    {
      key: '921',
      name: 'Channel 1',
      image: './images/profile.png',
    },
    {
      key: '910',
      name: 'Channel 2',
      image: '/images/profile2.jpg',
    },
  ],
};

Default.args = props;

const stories = {
  title: 'components/widgets/channel',
  component: ChannelsComponent,
  argTypes: {},
};

export default stories;
