import styles from './constructor-bun-item.module.css';

import { FC } from 'react';

import { useSelector } from '../../services/hooks';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

const ConstructorBunItem: FC<{ type: 'top' | 'bottom' | undefined }> = ({ type }) => {
  const bunItem = useSelector(state => state.burger.constructor.bunItem);

  const text = `${bunItem.name} ${type === 'top' ? '(верх)' : '(низ)'}`;

  return (
    <>
      {bunItem._id && (
        <div className={styles.container}>
          <ConstructorElement
            type={type}
            isLocked={true}
            text={text}
            price={bunItem.price}
            thumbnail={bunItem.image_mobile}
          />
        </div>
      )}
    </>
  );
}

export default ConstructorBunItem;
