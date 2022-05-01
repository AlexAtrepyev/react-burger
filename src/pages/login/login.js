import styles from './login.module.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

function LoginPage() {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    console.log('button has been clicked');
  };
  
  const linkClass = 'text text_type_main-default text_color_link text_decoration_none';

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className="text text_type_main-medium mb-6">Вход</h1>
        <form className={styles.form}>
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            value={value}
            onChange={onChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Введите новый пароль"
            value={value}
            onChange={onChange}
            icon="ShowIcon"
          />
          <Button type="primary" size="medium" onClick={handleClick}>Войти</Button>
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
