import { useState } from 'react';
import styles from './CakesBlock.module.scss';
import { FaPlus, FaUndoAlt } from 'react-icons/fa';
import Notiflix from 'notiflix';
import Modal from 'react-modal';

const CakesBlock = props => {
  const [count, setCount] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
    },
  };
  Modal.setAppElement('#root');

  Notiflix.Notify.init({
    position: 'right-bottom',
    borderRadius: '10px',
    fontSize: '18px',
    fontFamily: 'Arial, sans-serif',
    width: '300px',
    distance: '15px',
    timeout: 3000,
    className: 'notiflix-notify',
  });

  function alertCake() {
    Notiflix.Notify.success(`Торт "${props.title}" додано до вашого кошика`);
  }

  return (
    <main>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <span className={styles.close_icon}><FaUndoAlt size={25} onClick={closeModal} /></span>
        <table class={styles.nutrient_table}>
          <thead>
            <tr>
              <th>Вуглеводи (г)</th>
              <th>Жири (г)</th>
              <th>Білки (г)</th>
              <th>Калорії</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>34</td>
              <td>45</td>
              <td>2</td>
              <td>8</td>
            </tr>
            <tr>
              <td>65</td>
              <td>12</td>
              <td>5</td>
              <td>8</td>
            </tr>
            <tr>
              <td>35</td>
              <td>1</td>
              <td>5</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
      </Modal>
      <div className={styles.wrapper}>
        <div className={styles.cake_block}>
          <div className={styles.description_container}>
            <img
              src={props.urlImage}
              alt="cake"
              className={styles.cake_image}
              onClick={openModal}
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
    </main>
  );
};

export default CakesBlock;
