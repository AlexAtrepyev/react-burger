import styles from './profile.module.css';

import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { updateUser, logout } from '../../services/actions';

import { TUser, TForm } from '../../types';

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

function ProfilePage() {
  const dispatch = useDispatch();

  const user = useSelector<any, TUser>(state => state.auth.user);
  const [form, setValue] = useState<TForm>({ name: '', email: '', password: '' });

  useEffect(() => {
    setValue({ name: user.name, email: user.email, password: '' });
  }, [user]);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(updateUser({ name: form.name, email: form.email, password: form.password }));
  };

  const onCancel = (): void => {
    setValue({ name: user.name, email: user.email, password: '' });
  };

  const onLogout = (): void => {
    dispatch(logout());
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
      
      <form className={styles.form} onSubmit={onSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Имя"
          value={form['name'] ?? ''}
          onChange={onChange}
          icon="EditIcon"
        />
        <Input
          type="email"
          name="email"
          placeholder="Логин"
          value={form['email'] ?? ''}
          onChange={onChange}
          icon="EditIcon"
        />
        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          value={form['password'] ?? ''}
          onChange={onChange}
          icon="EditIcon"
        />
        <Button type="primary" htmlType="submit" size="medium">Сохранить</Button>
        <Button type="primary" htmlType="button" size="medium" onClick={onCancel}>Отмена</Button>
      </form>
    </section>
  );
}

export default ProfilePage;
