import styles from './constructor-bun-item.module.css';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

function ConstructorBunItem({ type }) {
  const { bunItem } = useSelector(state => state.burger.constructor);

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

ConstructorBunItem.propTypes = {
  type: PropTypes.string.isRequired
};

export default ConstructorBunItem;
