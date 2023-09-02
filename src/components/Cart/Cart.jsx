import { FaShoppingCart } from "react-icons/fa";
import styles from './Cart.module.scss';
function Cart() {
    return (
      <>
        <div className={styles.icon_cart}>
          <FaShoppingCart size={50} />
          <span></span>
        </div>
      </>
    );
}






export default Cart;
