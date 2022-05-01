import styles from './reset-password.module.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

function ResetPasswordPage() {
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
        <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
        <form className={styles.form}>
          <Input
            type="password"
            name="password"
            placeholder="Введите новый пароль"
            value={value}
            onChange={onChange}
            icon="ShowIcon"
          />
          <Input
            type="text"
            name="code"
            placeholder="Введите код из письма"
            value={value}
            onChange={onChange}
          />
          <Button type="primary" size="medium" onClick={handleClick}>Сохранить</Button>
        </form>
        <span className="text text_type_main-default text_color_inactive mt-20">
          Вспомнили пароль? <Link className={linkClass} to="/login">Войти</Link>
        </span>
      </div>
    </section>
  );
}

export default ResetPasswordPage;
