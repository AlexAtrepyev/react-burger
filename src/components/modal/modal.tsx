import styles from './modal.module.css';

import { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom';

import ModalOverlay from '../modal-overlay/modal-overlay';

import { useSelector } from '../../services/hooks';

const Modal: FC<{ orderModal?: boolean, title?: string, onClose: () => void }> = ({ children, orderModal, title, onClose }) => {
  const { id } = useParams<{ id: string }>();
  
  const order = useSelector(state => {
    const { orders } = state.feed;
    return orders.find(order => order._id === id);
  });

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, []);

  const handleKeyPress = (e: KeyboardEvent): void => {
    e.key === 'Escape' && onClose();
  }

  const container = document.getElementById('modals');

  const getTextTitleElement = (): JSX.Element => {
    return (
      <h1 className="text text_type_main-large">{title}</h1>
    );
  }

  const getOrderTitleElement = (): JSX.Element => {
    return (
      <h1 className="text text_type_digits-default">{order ? `#${order.number}` : '-'}</h1>
    );
  }

  return container && ReactDOM.createPortal(
    <ModalOverlay onClose={onClose}>
      <div className={styles.modal}>
        <div className={styles.title}>
          {orderModal ? getOrderTitleElement() : getTextTitleElement()}
          <button className={styles.close} onClick={onClose} />
        </div>
        {children}
      </div>
    </ModalOverlay>,
    container
  );
}

export default Modal;
