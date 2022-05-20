import styles from './modal.module.css';

import { FC } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import ModalOverlay from '../modal-overlay/modal-overlay';

const Modal: FC<{ title?: string, onClose: () => void }> = ({ children, title, onClose }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, []);

  function handleKeyPress(e: KeyboardEvent): void {
    e.key === 'Escape' && onClose();
  }

  const container = document.getElementById('modals');

  return container && ReactDOM.createPortal(
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
    container
  );
}

export default Modal;
