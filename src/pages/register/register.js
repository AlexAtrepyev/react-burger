import styles from './register.module.css';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { register } from '../../services/actions';

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

function RegisterPage() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.user);

  const [form, setValue] = useState({ name: '', email: '', password: '' });

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(register(form));
  };
  
  const linkClass = 'text text_type_main-default text_color_link text_decoration_none';

  if (user.name) {
    return (
      <Redirect
        to={{
          pathname: '/'
        }}
      />
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
        <form className={styles.form} onSubmit={onSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Имя"
            value={form['name']}
            onChange={onChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            value={form['email']}
            onChange={onChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Введите новый пароль"
            value={form['password']}
            onChange={onChange}
            icon="ShowIcon"
          />
          <Button type="primary" htmlType="submit" size="medium">Зарегистрироваться</Button>
        </form>
        <span className="text text_type_main-default text_color_inactive mt-20">
          Уже зарегистрированы? <Link className={linkClass} to="/login">Войти</Link>
        </span>
      </div>
    </section>
  );
}

export default RegisterPage;
