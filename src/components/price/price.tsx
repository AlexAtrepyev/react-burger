import styles from './price.module.css';

import { FC } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Price: FC<{ value: number | string | undefined, mediumSize?: boolean }> = ({ value, mediumSize }) => {
  const spanClass = `text ${mediumSize ? 'text_type_digits-medium' : 'text_type_digits-default'}`;

  return (
    <div className={styles.price}>
      <span className={spanClass}>{value ?? '-'}</span>
      <CurrencyIcon type="primary" />
    </div>
  );
}

export default Price;
