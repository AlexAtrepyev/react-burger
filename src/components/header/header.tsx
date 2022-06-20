import styles from './header.module.css';

import { FC } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Header: FC = () => {
  const { pathname } = useLocation();
  
  const getType = (link: string, exact?: 'exact'): 'primary' | 'secondary' => {
    if (exact) {
      return link === pathname ? 'primary' : 'secondary';
    } else {
      return pathname.startsWith(link) ? 'primary' : 'secondary';
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink className={styles.link} activeClassName={styles.link_active} exact to="/">
              <BurgerIcon type={getType('/', 'exact')} />
              <span className="text text_type_main-default">Конструктор</span>
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink className={styles.link} activeClassName={styles.link_active} exact to="/feed">
              <ListIcon type={getType('/feed', 'exact')} />
              <span className="text text_type_main-default">Лента заказов</span>
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink className={styles.link} activeClassName={styles.link_active} to="/profile">
              <ProfileIcon type={getType('/profile')} />
              <span className="text text_type_main-default">Личный кабинет</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.container}>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
    </header>
  );
}

export default Header;
