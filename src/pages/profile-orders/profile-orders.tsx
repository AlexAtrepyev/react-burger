import styles from './profile-orders.module.css';

import { NavLink } from 'react-router-dom';

import { logoutThunk } from '../../services/actions/auth';
import { useDispatch } from '../../services/hooks';

import OrderCard from '../../components/order-card/order-card';

function ProfileOrdersPage() {
  const dispatch = useDispatch();
  
  const onLogout = (): void => {
    dispatch(logoutThunk());
  };

  const linkClass = 'text text_type_main-medium text_decoration_none text_color_inactive ';

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink className={linkClass} activeClassName={styles.activeLink} exact to="/profile">Профиль</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink className={linkClass} activeClassName={styles.activeLink} exact to="/profile/orders">История заказов</NavLink>
          </li>
          <li className={styles.item}>
            <button className={linkClass + styles.logout} onClick={onLogout}>Выход</button>
          </li>
        </ul>
        <p className="text text_type_main-default text_color_inactive mt-20">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      
      <ul className={styles.orders}>
        <OrderCard location="profile" />
        <OrderCard location="profile" />
        <OrderCard location="profile" />
        <OrderCard location="profile" />
        <OrderCard location="profile" />
        <OrderCard location="profile" />
        <OrderCard location="profile" />
      </ul>
    </section>
  );
}

export default ProfileOrdersPage;
