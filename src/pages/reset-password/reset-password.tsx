import styles from './reset-password.module.css';

import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { TForm } from '../../@types/data';

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

import { resetPasswordStepTwoThunk } from '../../services/actions/auth';
import { useSelector, useDispatch } from '../../services/hooks';

const ResetPasswordPage: FC = () => {
  const dispatch = useDispatch();
  const permission = useSelector(state => state.auth.resetPasswordStepOneSuccess);
  const success = useSelector(state => state.auth.resetPasswordStepTwoSuccess);
  
  const [form, setValue] = useState<TForm>({ password: '', token: '' });
  
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(resetPasswordStepTwoThunk(form.password, form.token));
  };
  
  const linkClass = 'text text_type_main-default text_color_link text_decoration_none';
  
  if (!permission) {
    return (
      <Redirect to={{ pathname: '/forgot-password' }} />
    );
  }

  if (success) {
    return (
      <Redirect to={{ pathname: '/login' }} />
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
        <form className={styles.form} onSubmit={onSubmit}>
          <Input
            type="password"
            name="password"
            placeholder="Введите новый пароль"
            value={form['password'] ?? ''}
            onChange={onChange}
            icon="ShowIcon"
          />
          <Input
            type="text"
            name="token"
            placeholder="Введите код из письма"
            value={form['token'] ?? ''}
            onChange={onChange}
          />
          <Button type="primary" htmlType="submit" size="medium">Сохранить</Button>
        </form>
        <span className="text text_type_main-default text_color_inactive mt-20">
          Вспомнили пароль? <Link className={linkClass} to="/login">Войти</Link>
        </span>
      </div>
    </section>
  );
}

export default ResetPasswordPage;
