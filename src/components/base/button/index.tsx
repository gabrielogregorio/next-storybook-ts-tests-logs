import styles from './styles.module.css';

export type buttonType = {
  children: any;
  small?: boolean;
  onClick?: (event: any) => void;
};

export const Button = ({ children, onClick, small = false }: buttonType) => {
  const smallStyles = small ? styles['Button--small'] : '';

  return (
    <button onClick={onClick} className={`${styles.button} ${smallStyles}`} type="button">
      {children}
    </button>
  );
};
