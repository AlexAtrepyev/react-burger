import styles from './app-header-link.module.css';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AppHeaderLink({ children, text, inactive, route }) {
  const textClass = `ml-2 text text_type_main-default${inactive ? ' text_color_inactive' : ''}`;

  return (
    <Link className={styles.link} to={route}>
      {children}
      <span className={textClass}>{text}</span>
    </Link>
  );
}

AppHeaderLink.propTypes = {
  children: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  inactive: PropTypes.bool,
}; 

export default AppHeaderLink;
