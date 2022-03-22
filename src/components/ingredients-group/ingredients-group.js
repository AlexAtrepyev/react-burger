import styles from './ingredients-group.module.css';

import PropTypes from 'prop-types';

import dataPropTypes from '../../utils/prop-types';

import IngredientItem from '../ingredient-item/ingredient-item';

function IngredientsGroup({ title, data }) {
  const listClass = `${styles.list} pl-4 pr-4`;

  return (
    <li>
      <h2 className="text text_type_main-medium mt-10 mb-6">{title}</h2>
      <ul className={listClass}>
        {data.map(item => (
          <IngredientItem key={item._id} name={item.name} price={item.price} image={item.image} />
        ))}
      </ul>
    </li>
  );
}

IngredientsGroup.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(dataPropTypes).isRequired
}; 

export default IngredientsGroup;
