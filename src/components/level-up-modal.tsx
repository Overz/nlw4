import React, { useContext } from 'react';
import { ChallangesContext } from '../contexts/challange-context';

import styles from '../styles/components/modal-level-up.module.css';

export const LevelUpModal: React.FC = () => {
  const { level, closeModal } = useContext(ChallangesContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns!</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeModal}>
          <img src="icons/close.svg" alt="#" />
        </button>
      </div>
    </div>
  );
};
