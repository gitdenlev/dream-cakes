import React, { useState, useEffect } from 'react';
import CakesItem from '../../components/CakesItem/CakesItem';
import Header from '../../components/Header/Header';
import Sort from '../../components/Sort/Sort';
import { BarLoader } from 'react-spinners';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Имитируем загрузку данных (вы можете заменить эту часть на реальный код загрузки данных)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Пример: загрузка в течение 2 секунд

    // Внимание: Если у вас реальная логика загрузки данных, замените setTimeout на реальный код загрузки.
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
          <span style={{ marginTop: '10px', fontSize: '48px' }}>Dream Cakes</span>
        </div>
      ) : (
        <>
          <Header />
          {/* <Sort /> */}
          <CakesItem />
        </>
      )}
    </main>
  );
}

export default Home;
