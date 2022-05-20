import styles from './ingredients-group.module.css';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { TIngredient } from '../../types';

import IngredientsItem from '../ingredients-item/ingredients-item';

type TIngredientsGroupProps = {
  title: string;
  items: TIngredient[];
};

const IngredientsGroup = React.forwardRef<HTMLHeadingElement, TIngredientsGroupProps>(({ title, items }, ref) => {
  const location = useLocation<any>();

  return (
    <li>
      <h2 ref={ref} className="text text_type_main-medium mb-6">{title}</h2>
      <ul className={styles.list}>
        {items.map(item =>
          <Link
            key={item._id}
            className={styles.link}
            to={{
              pathname: `/ingredients/${item._id}`,
              state: { background: location }
            }}
          >
            <IngredientsItem item={item} />
          </Link>
        )}
      </ul>
    </li>
  );
});

export default IngredientsGroup;
