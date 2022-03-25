import styles from './app-header-link.module.css';

import PropTypes from 'prop-types';

function AppHeaderLink({ children, text, inactive }) {
  const textClass = `ml-2 text text_type_main-default${inactive ? ' text_color_inactive' : ''}`;

  return (
    <a className={styles.link} href="#">
      {children}
      <span className={textClass}>{text}</span>
    </a>
  );
}

AppHeaderLink.propTypes = {
  children: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  inactive: PropTypes.bool,
}; 

export default AppHeaderLink;
