import type { IShoe, IVariant } from '../../../types.ts';
import { Button } from '../../ui/Button/Button.tsx';
import styles from './ShoeCard.module.scss';
import { ColorPicker } from '../Colorpicker/ColorPicker.tsx';
import { useState } from 'react';

interface ShoeCardProps {
  shoe: IShoe;
  isWinner?: boolean;
}

const HARDCODED_VARIANTS: IVariant[] = [
  {
    id: '1',
    name: 'Neon & Grey',
    colors: ['#D4E157', '#9E9E9E'], // Neonově zelená / Šedá
  },
  {
    id: '2',
    name: 'Flare & Graphite',
    colors: ['#FF7043', '#424242'], // Oranžová / Tmavě šedá
  },
  {
    id: '3',
    name: 'Sky & Navy',
    colors: ['#4FC3F7', '#0D47A1'], // Světle modrá / Tmavě modrá
  },
  {
    id: '4',
    name: 'Lavender & Plum',
    colors: ['#CE93D8', '#4A148C'], // Světle fialová / Tmavě fialová
  },
];

export const ShoeCard = ({ shoe, isWinner = false }: ShoeCardProps) => {
  const imageSrc = `/src/assets/${shoe.name}.png`;
  const [selectedVariant, setSelectedVariant] = useState<IVariant>(HARDCODED_VARIANTS[0]);

  return (
    <div className={`${styles.card} ${isWinner ? styles['card--winner'] : ''}`}>
      <div className={styles.card__infoWrapper}>
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

          <p className={styles.card__meta}>
            <span className={styles.price}>200 CHF</span>
            <span className={styles.separator}> | </span>
            <span className={styles.colorInfo}>{selectedVariant.name}</span>
          </p>

          <div className={styles.card__variantsWrapper}>
            <ColorPicker
              variants={HARDCODED_VARIANTS}
              selectedVariantId={selectedVariant.id}
              onSelect={setSelectedVariant}
            />
          </div>
        </div>
      </div>
      <div className={styles.card__action}>
        <Button
          variant="shop"
          fullWidth={false}
          href="https://www.on.com/"
        >
          Shop now
        </Button>
      </div>
    </div>
  );
};
