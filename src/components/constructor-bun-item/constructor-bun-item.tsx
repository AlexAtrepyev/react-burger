import styles from './constructor-bun-item.module.css';

import { FC } from 'react';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import { useSelector } from '../../services/hooks';

const ConstructorBunItem: FC<{ type: 'top' | 'bottom' | undefined }> = ({ type }) => {
  const bun = useSelector(state => state.burger.bun);

  const text = `${bun?.name} ${type === 'top' ? '(верх)' : '(низ)'}`;

  return (
    <>
      {bun?._id && (
        <div className={styles.container}>
          <ConstructorElement
            type={type}
            isLocked={true}
            text={text}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        </div>
      )}
    </>
  );
}

export default ConstructorBunItem;
