import styles from './modal-overlay.module.css';

import PropTypes from 'prop-types';

function ModalOverlay({ children, onClose }) {
  function handleClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }
  
  return (
    <div className={styles.overlay} onClick={handleClick}>
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ModalOverlay;
