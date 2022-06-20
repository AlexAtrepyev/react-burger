import styles from './profile.module.css';

import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';

import { TForm } from '../../@types/data';

import ProfileSidebar from '../../components/profile-sidebar/profile-sidebar';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';

import { updateUserThunk } from '../../services/actions/auth';
import { useSelector, useDispatch } from '../../services/hooks';

const ProfilePage: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const [form, setValue] = useState<TForm>({ name: '', email: '', password: '' });

  useEffect(() => {
    setValue({ name: user?.name, email: user?.email, password: '' });
  }, [user]);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(updateUserThunk(form.name, form.email, form.password));
  };

  const onCancel = (): void => {
    setValue({ name: user?.name, email: user?.email, password: '' });
  };


  return (
    <section className={styles.section}>
      <ProfileSidebar />
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
        <Button type="primary" htmlType="reset" size="medium" onClick={onCancel}>Отмена</Button>
      </form>
    </section>
  );
}

export default ProfilePage;
