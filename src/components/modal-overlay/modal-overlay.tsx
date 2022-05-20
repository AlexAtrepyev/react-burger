import styles from './modal-overlay.module.css';

import { FC, SyntheticEvent } from 'react';

const ModalOverlay: FC<{ onClose: () => void }> = ({ children, onClose }) => {
  function handleClick(e: SyntheticEvent) {
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

export default ModalOverlay;
