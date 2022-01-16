import { ChannelsComponent, channelsType } from '../../widgets/channels';
import styles from './styles.module.css';

const channels: channelsType[] = [
  {
    key: '1',
    name: 'TRUE GRIME',
    image: '/images/profile.png',
  },
  {
    key: '2',
    name: 'Rito Gomes',
    image: '/images/profile.png',
  },
  {
    key: '3',
    name: 'BMG Interactive',
    image: '/images/profile.png',
  },
  {
    key: '4',
    name: 'There are no Easter Eggs up here. Go away.',
    image: '/images/profile.png',
  },
];
export function AsideComponent() {
  return (
    <aside className={styles.aside}>
      <ChannelsComponent channels={channels} />
    </aside>
  );
}
