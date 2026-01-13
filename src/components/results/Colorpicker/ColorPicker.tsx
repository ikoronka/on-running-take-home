import styles from './ColorPicker.module.scss';
import type { IVariant } from '../../../types.ts';

interface ColorPickerProps {
  variants: IVariant[];
  selectedVariantId: string;
  onSelect: (variant: IVariant) => void;
}

export const ColorPicker = ({ variants, selectedVariantId, onSelect }: ColorPickerProps) => {
  return (
    <div className={styles.picker}>
      {variants.map((variant) => {
        const isSelected = selectedVariantId === variant.id;

        return (
          <button
            key={variant.id}
            onClick={() => onSelect(variant)}
            className={`${styles.swatch} ${isSelected ? styles['swatch--active'] : ''}`}
            aria-label={`Select color ${variant.name}`}
            style={{
              background: `linear-gradient(0deg, ${variant.colors[0]} 50%, ${variant.colors[1]} 50%)`,
            }}
          />
        );
      })}
    </div>
  );
};
