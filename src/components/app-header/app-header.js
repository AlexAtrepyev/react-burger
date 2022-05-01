import styles from './app-header.module.css';

import AppHeaderLink from '../app-header-link/app-header-link';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li className="mr-2">
            <AppHeaderLink text='Конструктор' route="/">
              <BurgerIcon type="primary" />
            </AppHeaderLink>
          </li>
          <li>
            <AppHeaderLink text='Лента заказов' inactive route="/profile/orders">
              <ListIcon type="secondary" />
            </AppHeaderLink>
          </li>
        </ul>
      </nav>
      <div className={styles.logo}>
        <Logo />
      </div>
      <AppHeaderLink text='Личный кабинет' route="/profile">
        <ProfileIcon type="secondary" />
      </AppHeaderLink>
    </header>
  );
}

export default AppHeader;
