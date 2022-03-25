import styles from './nutritional-value.module.css';

import PropTypes from 'prop-types';

function NutritionalValue({ name, value }) {
  return (
    <li className={styles.item}>
      <h4 className="text text_type_main-default text_color_inactive mb-2">{name}</h4>
      <p className="text text_type_main-medium text_color_inactive">{value}</p>
    </li>
  );
}

NutritionalValue.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default NutritionalValue;
