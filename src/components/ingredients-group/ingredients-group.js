import styles from './ingredients-group.module.css';

import PropTypes from 'prop-types';

import dataPropTypes from '../../utils/prop-types';

import Ingredient from '../ingredient/ingredient';

function IngredientsGroup({ title, data }) {
  return (
    <li>
      <h2 className="text text_type_main-medium mb-6">{title}</h2>
      <ul className={styles.list}>
        {data.map(item => (
          <Ingredient
            key={item._id}
            name={item.name}
            proteins={item.proteins}
            fat={item.fat}
            carbohydrates={item.carbohydrates}
            calories={item.calories}
            price={item.price}
            image={item.image}
            imageLarge={item.image_large}
          />
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
