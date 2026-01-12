import type { IShoe } from '../../../types.ts';
import { Button } from '../../ui/Button/Button.tsx';
import styles from './ShoeCard.module.scss';

interface ShoeCardProps {
  shoe: IShoe;
  winner?: boolean;
}

export const ShoeCard = ({ shoe, winner = false }: ShoeCardProps) => {
  const imageSrc = `/src/assets/${shoe.name}.png`;

  return (
    <div className={`${styles.card} ${winner ? styles['card--winner'] : ''}`}>
      <img
        src={imageSrc}
        alt={shoe.name}
        className="styles.card__image"
        // In case of missing image
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/assets/on-logo.png';
        }}
      />

      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{shoe.name}</h3>
        <p className={styles.card__description}>
          Your perfect partner in the world's lightest fully-cushioned shoe for Running Remixed.
        </p>

        <div className={styles.card__variants}>
          <span
            style={{ background: '#D4E157' }}
            className={styles.card__variant}
          ></span>
          <span
            style={{ background: '#263238' }}
            className={styles.card__variant}
          ></span>
          <span
            style={{ background: '#0277BD' }}
            className={styles.card__variant}
          ></span>
        </div>

        <div className={styles.card__action}>
          <Button
            variant="shop"
            fullWidth
          >
            Shop now
          </Button>
        </div>
      </div>
    </div>
  );
};
