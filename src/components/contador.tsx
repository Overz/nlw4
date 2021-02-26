import React, { useContext } from 'react';
import { ContadorContext } from '../contexts/contador-context';

import styles from '../styles/components/contador.module.css';

export const Contador: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCounter,
    startCount,
  } = useContext(ContadorContext);

  const [leftMinute, rightMinute] = String(minutes).padStart(2, '0').split('');
  const [leftSecond, rightSecond] = String(seconds).padStart(2, '0').split('');

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
      {hasFinished ? (
        <button disabled className={styles.botaoContador}>
          Ciclo Encerrado
        </button>
      ) : (
        <React.Fragment>
          {isActive ? (
            <button
              onClick={resetCounter}
              type="button"
              className={`${styles.botaoContador} ${styles.botaoContadorAtivo}`}
            >
              Abanconar Ciclo
            </button>
          ) : (
            <button
              onClick={startCount}
              type="button"
              className={styles.botaoContador}
            >
              Iniciar Ciclo
            </button>
          )}
        </React.Fragment>
      )}
    </div>
  );
};
