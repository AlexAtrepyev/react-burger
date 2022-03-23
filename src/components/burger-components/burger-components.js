import styles from './burger-components.module.css';

import PropTypes from 'prop-types';

import dataPropTypes from '../../utils/prop-types';

import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerComponents({ data }) {
  return (
    <ul className={styles.list}>
      {data.map(item => {
        return (
          <li className={styles.element} key={item._id}>
            <DragIcon type="primary" />
            <ConstructorElement
              isLocked={false}
              text={item.name}
              price={item.price}
              thumbnail={item.image_mobile}
            />
          </li>
        )
      })}
    </ul>
  );
}

BurgerComponents.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes).isRequired
}; 

export default BurgerComponents;
