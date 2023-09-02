import styles from './NotFound.module.scss'

const NotFound = () => {
    return (
      <>
        <a className={styles.link} href="/dream-cakes">
          Home
        </a>
        <div className={styles.error_container}>
          <b style={{ fontSize: 64 }}>404</b>
          <p>Sorry, we couldn't find that page :(</p>
        </div>
      </>
    );
}


export default NotFound;