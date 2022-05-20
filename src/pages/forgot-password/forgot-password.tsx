import styles from './forgot-password.module.css';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { resetPasswordStepOne } from '../../services/actions';

import { TUser, TForm } from '../../types';

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

function ForgotPasswordPage() {
  const dispatch = useDispatch();

  const user = useSelector<any, TUser>(state => state.auth.user);
  const success = useSelector<any, boolean>(state => state.auth.resetPassword.stepOne.success);
  
  const [form, setValue] = useState<TForm>({ email: '' });
  
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(resetPasswordStepOne({ email: form.email }));
  };
  
  const linkClass: string = 'text text_type_main-default text_color_link text_decoration_none';
  
  if (user.name) {
    return (
      <Redirect
        to={{
          pathname: '/'
        }}
      />
    );
  }

  if (success) {
    return (
      <Redirect
        to={{
          pathname: '/reset-password'
        }}
      />
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
        <form className={styles.form} onSubmit={onSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Укажите e-mail"
            value={form['email'] ?? ''}
            onChange={onChange}
          />
          <Button type="primary" htmlType="submit" size="medium">Восстановить</Button>
        </form>
        <span className="text text_type_main-default text_color_inactive mt-20">
          Вспомнили пароль? <Link className={linkClass} to="/login">Войти</Link>
        </span>
      </div>
    </section>
  );
}

export default ForgotPasswordPage;
