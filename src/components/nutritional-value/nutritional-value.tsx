import styles from './nutritional-value.module.css';

import { FC } from 'react';

const NutritionalValue: FC<{ name: string, value: number | undefined }> = ({ name, value }) => {
  return (
    <li className={styles.item}>
      <h4 className="text text_type_main-default text_color_inactive mb-2">{name}</h4>
      <p className="text text_type_main-medium text_color_inactive">{value}</p>
    </li>
  );
}

export default NutritionalValue;
