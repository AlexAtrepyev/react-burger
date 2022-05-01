import styles from './profile.module.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { updateUser, logout } from '../../services/actions';

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

function ProfilePage() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.user);
  const [form, setValue] = useState({ name: '', email: '', password: '' });

  useEffect(() => {
    setValue({ name: user.name, email: user.email, password: '' });
  }, [user]);

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(updateUser(form));
  };

  const onCancel = e => {
    setValue({ name: user.name, email: user.email, password: '' });
  };

  const onLogout = e => {
    dispatch(logout());
  };

  const linkClass = 'text text_type_main-medium text_decoration_none text_color_inactive ';

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
            <button className={linkClass + styles.logout} onClick={onLogout}>Выход</button>
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
          value={form['name']}
          onChange={onChange}
          icon="EditIcon"
        />
        <Input
          type="email"
          name="email"
          placeholder="Логин"
          value={form['email']}
          onChange={onChange}
          icon="EditIcon"
        />
        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          value={form['password']}
          onChange={onChange}
          icon="EditIcon"
        />
        <Button type="primary" htmlType="submit" size="medium" onClick={onSubmit}>Сохранить</Button>
        <Button type="primary" htmlType="button" size="medium" onClick={onCancel}>Отмена</Button>
      </form>
    </section>
  );
}

export default ProfilePage;
