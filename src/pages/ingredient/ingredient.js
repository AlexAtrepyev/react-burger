import styles from './ingredient.module.css';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import NutritionalValue from '../../components/nutritional-value/nutritional-value';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

function IngredientPage() {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const linkClass = 'text text_type_main-medium text_decoration_none text_color_inactive';

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className="text text_type_main-large">Детали ингредиента</h1>
        <img src="https://code.s3.yandex.net/react/code/meat-01-large.png" alt="Биокотлета из марсианской Магнолии" />
        <h2 className="text text_type_main-medium mt-4 mb-8">Биокотлета из марсианской Магнолии</h2>
        <ul className={styles.list}>
          <NutritionalValue name="Калории, ккал" value={"244,4"} />
          <NutritionalValue name="Белки, г" value={"12,2"} />
          <NutritionalValue name="Жиры, г" value={"17,2"} />
          <NutritionalValue name="Углеводы, г" value={"10,2"} />
        </ul>
      </div>
    </section>
  );
}

export default IngredientPage;
