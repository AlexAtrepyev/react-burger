import styles from './modal.module.css';

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import ModalOverlay from '../modal-overlay/modal-overlay';

function Modal({ children, title, onClose }) {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, []);

  function handleKeyPress(e) {
    e.key === 'Escape' && onClose();
  }

  return ReactDOM.createPortal(
    <ModalOverlay onClose={onClose}>
      <div className={styles.modal}>
        <div className={styles.title}>
          <h2 className="text text_type_main-large">{title}</h2>
          <button className={styles.close} onClick={onClose} />
        </div>
        <div className={styles.children}>
          {children}
        </div>
      </div>
    </ModalOverlay>,
    document.getElementById('modals')
  );
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired
};

export default Modal;
