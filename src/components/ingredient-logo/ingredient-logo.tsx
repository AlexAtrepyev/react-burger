import styles from './ingredient-logo.module.css';

import { FC } from 'react';

const IngredientLogo: FC<{ image: string, name: string, hiddenCount?: number }> = ({ image, name, hiddenCount }) => {
  return (
    <div className={styles.external}>
      <div className={hiddenCount ? styles.internalOverlay : styles.internal}>
        {hiddenCount && <span className={`text text_type_main-default ${styles.overlay}`}>{`+${hiddenCount}`}</span>}
        <img className={styles.image} src={image} alt={name} />
      </div>
    </div>
  );
}

export default IngredientLogo;
