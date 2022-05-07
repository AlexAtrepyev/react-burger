import styles from './ingredients-group.module.css';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import IngredientsItem from '../ingredients-item/ingredients-item';

const IngredientsGroup = React.forwardRef((props, ref) => {
  const location = useLocation();
  const { title, items } = props;

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
