import styles from './styles.module.css';

export type channelsType = {
  key: string;
  image: string;
  name: string;
};

export type channelsPropsType = {
  channels: channelsType[];
};

export const ChannelsComponent = ({ channels }: channelsPropsType) => {
  function channel() {
    return channels.map((channel) => (
      <div className={styles.channels__channel} key={channel.key}>
        <button className={styles.channels__item}>
          <img className={styles.channels__image} src={channel.image} alt="" />
          <span className={styles.channels__name}>{channel.name}</span>
        </button>
      </div>
    ));
  }

  return <div className={styles.channels}>{channel()}</div>;
};
