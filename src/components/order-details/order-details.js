import styles from './order-details.module.css';

function OrderDetails() {
  return (
    <>
      <h3 className="text text_type_digits-large mt-4 mb-8">034536</h3>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <span className={styles.done}></span>
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mt-2 mb-15">Дождитесь готовности на орбитальной станции</p>
    </>
  );
}

export default OrderDetails;
