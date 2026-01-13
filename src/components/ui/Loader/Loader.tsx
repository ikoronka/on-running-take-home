import styles from './Loader.module.scss';
import loader from '../../../assets/loader.gif';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <img
        src={loader}
        alt="Loading"
      />
      <p className={styles.title}>We're running to get your results.</p>
    </div>
  );
};
