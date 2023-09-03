import { FaShoppingCart } from 'react-icons/fa';
import styles from './Header.module.scss';


const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <a href="/dream-cakes">
              <img
                src="https://i.ibb.co/ykT0vqZ/free-icon-cake-slice-2682343.png"
                alt="logo"
                width="100px"
              />
            </a>
          </div>
          <span className={styles.title}>Dream Cakes</span>
          <div className={styles.container_cart}>
            <a href="/cart" className={styles.shopping_cart}>
              <FaShoppingCart size={40} />
            </a>
            <span>{0} грн</span>
          </div>
        </nav>
      </header>
      
    </>
  );
};

export default Header;
