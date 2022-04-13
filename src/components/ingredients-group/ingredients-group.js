import styles from './ingredients-group.module.css';

import React from 'react';

import IngredientsItem from '../ingredients-item/ingredients-item';

const IngredientsGroup = React.forwardRef((props, ref) => {
  const { title, items } = props;

  return (
    <li>
      <h2 ref={ref} className="text text_type_main-medium mb-6">{title}</h2>
      <ul className={styles.list}>
        {items.map(item => <IngredientsItem key={item._id} item={item} />)}
      </ul>
    </li>
  );
});

export default IngredientsGroup;
