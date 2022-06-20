import styles from './ingredient.module.css';

import { FC } from 'react';

import IngredientDetails from '../../components/ingredient-details/ingredient-details';

const IngredientPage: FC = () => {
  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large">Детали ингредиента</h1>
      <IngredientDetails />
    </section>
  );
}

export default IngredientPage;
