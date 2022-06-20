import styles from './constructor-bun.module.css';

import { FC } from 'react';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import { useSelector } from '../../services/hooks';

const ConstructorBun: FC<{ type: 'top' | 'bottom' | undefined }> = ({ type }) => {
  const bun = useSelector(state => state.burger.bun);
  
  return bun && (
    <div className={styles.container}>
      <ConstructorElement
        type={type}
        isLocked={true}
        text={`${bun.name} ${type === 'top' ? '(верх)' : '(низ)'}`}
        price={bun.price}
        thumbnail={bun.image_mobile}
      />
    </div>
  );
}

export default ConstructorBun;
