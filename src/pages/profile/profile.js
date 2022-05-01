import styles from './profile.module.css';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

function ProfilePage() {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const linkClass = 'text text_type_main-medium text_decoration_none text_color_inactive';

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink to="/profile" className={linkClass} activeClassName={styles.activeLink}>Профиль</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/profile/orders" className={linkClass} activeClassName={styles.activeLink}>История заказов</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/logout" className={linkClass} activeClassName={styles.activeLink}>Выход</NavLink>
          </li>
        </ul>
        <p className="text text_type_main-default text_color_inactive mt-20">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      
      <form className={styles.form}>
        <Input
          type="text"
          name="name"
          placeholder="Имя"
          value={value}
          onChange={onChange}
          icon="EditIcon"
        />
        <Input
          type="email"
          name="email"
          placeholder="Логин"
          value={value}
          onChange={onChange}
          icon="EditIcon"
        />
        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          value={value}
          onChange={onChange}
          icon="EditIcon"
        />
      </form>
    </section>
  );
}

export default ProfilePage;
