import styles from './styles.module.css';

export const HeaderComponent = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__base}>
        <button className={styles.header__button}>timeline</button>
        <button className={styles.header__button}>subscriptions</button>
        <button className={styles.header__button}>discovery</button>
      </nav>
      <nav className={styles.header__profile}>
        <button className={styles.header__button}>profile</button>
      </nav>
    </header>
  );
};
