import styles from './app-header.module.css';
import AppHeaderLink from '../app-header-link/app-header-link';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li className="mr-2">
            <AppHeaderLink text='Конструктор'>
              <BurgerIcon type="primary" />
            </AppHeaderLink>
          </li>
          <li>
            <AppHeaderLink text='Лента заказов' inactive>
              <ListIcon type="secondary" />
            </AppHeaderLink>
          </li>
        </ul>
      </nav>
      <div className={styles.logo}>
        <Logo />
      </div>
      <AppHeaderLink text='Личный кабинет' inactive>
        <ProfileIcon type="secondary" />
      </AppHeaderLink>
    </header>
  );
}

export default AppHeader;
