import { useState, useEffect } from 'react';
import styles from './NotFound.module.scss';
import { BarLoader } from 'react-spinners';

function NotFound() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <main>
      {loading ? (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            background: 'rgb(233,211,193)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <BarLoader color="black" loading size={20} />
          <span style={{ marginTop: '10px', fontSize: '48px' }}>
            Dream Cakes
          </span>
        </div>
      ) : (
        <>
          <a className={styles.link} href="/dream-cakes">
            Home
          </a>
          <div className={styles.error_container}>
            <b style={{ fontSize: 64 }}>404</b>
            <p>Sorry, we couldn't find that page :(</p>
          </div>
        </>
      )}
    </main>
  );
}

export default NotFound;
