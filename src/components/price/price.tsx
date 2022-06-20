import styles from './price.module.css';

import { FC } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Price: FC<{ value: number | string | undefined }> = ({ value }) => {
  return (
    <div className={styles.price}>
      <span className="text text_type_digits-default">{value ?? '-'}</span>
      <CurrencyIcon type="primary" />
    </div>
  );
}

export default Price;
