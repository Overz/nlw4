import React, { useContext } from 'react';
import { ChallangesContext } from '../contexts/challange-context';
import styles from '../styles/components/perfil.module.css';

export const Perfil: React.FC = () => {
  const { level } = useContext(ChallangesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Overz.png" alt="#" />
      <div>
        <strong>Christian Lima</strong>
        <p>
          <img src="icons/level.svg" alt="#" />
          Level {level}
        </p>
      </div>
    </div>
  );
};
