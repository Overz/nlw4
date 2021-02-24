import React, { useEffect, useState } from 'react';
import ms from 'ms';

import styles from '../styles/components/contador.module.css';

const Contador: React.FC = () => {
  const [time, setTime] = useState(ms('25m'));
  const [isActive, setIsActive] = useState(false);

  const m = Math.floor(time / 60);
  const s = time % 60;

  const [leftMinute, rightMinute] = String(m).padStart(2, '0').split('');
  const [leftSecond, rightSecond] = String(s).padStart(2, '0').split('');

  const startCount = () => {
    setIsActive(true);
  };

  useEffect(() => {
    if (isActive && time) {
      setTimeout(() => {
        setTime(time - 1);
      }, ms('1s'));
    }
  }, [isActive, time]);

  return (
    <div>
      <div className={styles.contador}>
        <div>
          <span>{leftMinute}</span>
          <span>{rightMinute}</span>
        </div>
        <span>:</span>
        <div>
          <span>{leftSecond}</span>
          <span>{rightSecond}</span>
        </div>
      </div>
      <button
        onClick={startCount}
        type="button"
        className={styles.botaoContador}
      >
        Iniciar um ciclo
      </button>
    </div>
  );
};

export default Contador;
