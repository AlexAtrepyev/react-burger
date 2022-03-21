import styles from './ingredient-item.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

function IngredientItem({ name, price, image }) {
  const priceContainerClass = `${styles.price} mt-1 mb-1`;

  return (
    <li className={styles.item}>
      <img className={styles.image} src={image} alt={name} />
      <div className={priceContainerClass}>
        <span className="text text_type_digits-default mr-2">{price}</span>
        <CurrencyIcon />
      </div>
      <div className={styles.name}>
        <h3 className="text text_type_main-default">{name}</h3>
      </div>
      <Counter count={1} size="default" />
    </li>
  );
}

export default IngredientItem;
