import styles from './login.module.css';

import { useState, ChangeEvent, FormEvent } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

import { loginThunk } from '../../services/actions/auth';
import { TForm } from '../../services/types/data';
import { useSelector, useDispatch } from '../../services/hooks';

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

function LoginPage() {
  const history = useHistory<any>();
  
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const [form, setValue] = useState<TForm>({ email: '', password: '' });

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(loginThunk(form.email, form.password));
  };
  
  const linkClass = 'text text_type_main-default text_color_link text_decoration_none';

  if (user.name) {
    return (
      <Redirect
        to={ history.location.state?.from || '/' }
      />
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className="text text_type_main-medium mb-6">Вход</h1>
        <form className={styles.form} onSubmit={onSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            value={form['email'] ?? ''}
            onChange={onChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Введите новый пароль"
            value={form['password'] ?? ''}
            onChange={onChange}
            icon="ShowIcon"
          />
          <Button type="primary" htmlType="submit" size="medium">Войти</Button>
        </form>
        <span className="text text_type_main-default text_color_inactive mt-20 mb-4">
          Вы — новый пользователь? <Link className={linkClass} to="/register">Зарегистрироваться</Link>
        </span>
        <span className="text text_type_main-default text_color_inactive">
          Забыли пароль? <Link className={linkClass} to="/forgot-password">Восстановить пароль</Link>
        </span>
      </div>
    </section>
  );
}

export default LoginPage;
