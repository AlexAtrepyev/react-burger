import styles from './profile-sidebar.module.css';

import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { logoutThunk } from '../../services/actions/auth';
import { useDispatch } from '../../services/hooks';

const ProfileSidebar: FC = () => {
  const dispatch = useDispatch();
  
  const onLogout = (): void => {
    dispatch(logoutThunk());
  };

  const linkClass = 'text text_type_main-medium text_decoration_none text_color_inactive ';

  return (
    <div className={styles.sidebar}>
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
  );
}

export default ProfileSidebar;
