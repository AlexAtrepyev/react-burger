import styles from './reset-password.module.css';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { resetPasswordStepTwo } from '../../services/actions';

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

function ResetPasswordPage() {
  const dispatch = useDispatch();

  const success = useSelector(state => state.auth.resetPassword.stepTwo.success);
  
  const [form, setValue] = useState({ password: '', token: '' });
  
  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(resetPasswordStepTwo(form));
  };
  
  const linkClass = 'text text_type_main-default text_color_link text_decoration_none';

  if (success) {
    return (
      <Redirect
        to={{
          pathname: '/login'
        }}
      />
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
        <form className={styles.form}>
          <Input
            type="password"
            name="password"
            placeholder="Введите новый пароль"
            value={form['password']}
            onChange={onChange}
            icon="ShowIcon"
          />
          <Input
            type="text"
            name="token"
            placeholder="Введите код из письма"
            value={form['token']}
            onChange={onChange}
          />
          <Button type="primary" htmlType="submit" size="medium" onClick={onSubmit}>Сохранить</Button>
        </form>
        <span className="text text_type_main-default text_color_inactive mt-20">
          Вспомнили пароль? <Link className={linkClass} to="/login">Войти</Link>
        </span>
      </div>
    </section>
  );
}

export default ResetPasswordPage;
