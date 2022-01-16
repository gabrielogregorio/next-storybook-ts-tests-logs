import { AsideComponent } from '../../layouts/aside';
import { HeaderComponent } from '../../layouts/header';
import styles from './styles.module.css';

export function DefaultTemplate({ children }) {
  return (
    <div className={styles.container}>
      <HeaderComponent />

      <main className={styles.container__main}>
        <AsideComponent />
        {children}
      </main>
    </div>
  );
}
