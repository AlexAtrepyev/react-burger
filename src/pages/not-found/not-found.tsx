import styles from './not-found.module.css';

import { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: FC = () => {
  const linkClass = "text text_type_main-medium text_color_inactive";
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className="text text_type_main-large">Упс! Ошибка 404</h1>
        <p className="text text_type_main-medium mt-10 mb-20">Запрашиваемая страница не существует</p>
        <p className="text text_type_main-medium">
          проверьте адрес или вернитесь на <Link to='/' className={linkClass}>главную страницу</Link>
        </p>
      </div>
    </section>
  );
}

export default NotFoundPage;
