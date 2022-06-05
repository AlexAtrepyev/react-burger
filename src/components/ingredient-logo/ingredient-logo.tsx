import styles from './ingredient-logo.module.css';

function IngredientLogo() {
  return (
    <div className={styles.external}>
      <div className={styles.internal}>
        <img className={styles.image} src="https://code.s3.yandex.net/react/code/bun-02-mobile.png" alt="инш" />
      </div>
    </div>
  );
}

export default IngredientLogo;
