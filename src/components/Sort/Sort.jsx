import styles from './Sort.module.scss';
import { GiChocolateBar, GiRaspberry, GiWrappedSweet } from 'react-icons/gi';




const Sort = () => {
  





    return (
      <>
        <div className={styles.sort_container}>
          <ul className={styles.sort_list}>
            <li>
              Фруктові <GiRaspberry size={40} />
            </li>
            <li>
              Шоколадні
              <GiChocolateBar size={40} />
            </li>
            <li>
              Карамельні <GiWrappedSweet size={40} />
            </li>
          </ul>
        </div>
      </>
    );
}







export default Sort;