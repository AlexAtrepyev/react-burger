import styles from './ingredient-logo.module.css';

import { FC } from 'react';

const IngredientLogo: FC<{ image: string, name: string }> = ({ image, name }) => {
  return (
    <div className={styles.external}>
      <div className={styles.internal}>
        <img className={styles.image} src={image} alt={name} />
      </div>
    </div>
  );
}

export default IngredientLogo;
