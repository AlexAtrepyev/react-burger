import styles from './modal-overlay.module.css';

import { FC, SyntheticEvent } from 'react';

const ModalOverlay: FC<{ onClose: () => void }> = ({ children, onClose }) => {
  const handleClick = (e: SyntheticEvent): void => {
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
