import styles from './main.module.css';

import { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Burger from '../../components/burger/burger';
import Ingredients from '../../components/ingredients/ingredients';

const MainPage: FC = () => {
  return (
    <main className={styles.main}>
      <DndProvider backend={HTML5Backend}>
        <Ingredients />
        <Burger />
      </DndProvider>
    </main>
  );
}

export default MainPage;
