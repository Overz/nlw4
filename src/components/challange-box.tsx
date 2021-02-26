import React, { useContext } from 'react';
import { ChallangesContext } from '../contexts/challange-context';
import { ContadorContext } from '../contexts/contador-context';
import styles from '../styles/components/challange-box.module.css';

const ChallangeBox: React.FC = () => {
  const { activeChallange, resetChallange, completeChallange } = useContext(
    ChallangesContext
  );

  const { resetCounter } = useContext(ContadorContext);

  const handleChallangeCompleted = () => {
    completeChallange();
    resetCounter();
  };

  const handleChallangeFailed = () => {
    resetChallange();
    resetCounter();
  };

  return (
    <div className={styles.challangeBoxContainer}>
      {activeChallange ? (
        <div className={styles.chalangeActive}>
          <header>Ganhe {activeChallange.amount} xp</header>

          <main>
            <img src={`icons/${activeChallange.type}.svg`} alt="#" />
            <strong>Novo desafio</strong>
            <p>{activeChallange.description}</p>
          </main>

          <footer>
            <button
              type="button"
              onClick={handleChallangeFailed}
              className={styles.challangeFailedButton}
            >
              Falhei
            </button>
            <button
              type="button"
              onClick={handleChallangeCompleted}
              className={styles.challangeCompletedButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challangeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="#" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
};

export { ChallangeBox };
