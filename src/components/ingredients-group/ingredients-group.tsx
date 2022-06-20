import styles from './ingredients-group.module.css';

import { forwardRef as FR } from 'react';
import { useLocation } from 'react-router-dom';

import { TIngredient } from '../../@types/data';

import Ingredient from '../ingredient/ingredient';

const IngredientsGroup = FR<HTMLHeadingElement, { title: string, items: TIngredient[] }>(({ title, items }, ref) => {
  const location = useLocation<any>();

  return (
    <li>
      <h2 ref={ref} className="text text_type_main-medium mb-6">{title}</h2>
      <ul className={styles.list}>
        {items.map(item => <Ingredient key={item._id} item={item} background={location} />)}
      </ul>
    </li>
  );
});

export default IngredientsGroup;
