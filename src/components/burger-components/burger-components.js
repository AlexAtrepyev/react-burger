import styles from './burger-components.module.css';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerComponents({ data }) {
  const lastIndex = data.length - 1;
  return (
    <ul className={styles.list}>
      {data.map((item, index) => {
        const type = index === 0 ? 'top' : index === lastIndex ? 'bottom' : undefined;
        const isLocked = Boolean(type);
        return (
          <li className={styles.element} key={item._id}>
            {isLocked ? <div className={styles.deception} /> : <DragIcon type="primary" />}
            <ConstructorElement
              type={type}
              isLocked={isLocked}
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

export default BurgerComponents;
