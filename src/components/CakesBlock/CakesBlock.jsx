import { useState } from 'react';
import styles from './CakesBlock.module.scss';
import { FaPlus, FaUndoAlt } from 'react-icons/fa';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const CakesBlock = props => {
  const [count, setCount] = useState(false);

  function alertCake() {
    Notify.success(`Товар "${props.title}" додано до вашого кошика`);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.cake_block}>
          <div className={styles.description_container}>
            <img
              src={props.urlImage}
              alt="cake"
              className={styles.cake_image}
            />
            <p className={styles.description}>{props.description}</p>
          </div>

          <div className={styles.info}>
            <h1 className={styles.title}>Торт "{props.title}"</h1>
            <p>{props.weight}</p>
            <div className={styles.container_cost}>
              <h2 className={styles.price}>{props.price} грн</h2>
              <button
                onClick={() => {
                  setCount(count + 1);
                  alertCake();
                }}
                type="button"
                className={styles.btn_cart}
              >
                <FaPlus size={25} />
                <span>Додати</span>
                <span className={styles.count}>{count}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CakesBlock;
