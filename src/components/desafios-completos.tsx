import React, { useContext } from 'react';
import { ChallangesContext } from '../contexts/challange-context';
import styles from '../styles/components/desafios-completos.module.css';

export const DesafiosCompletos: React.FC = () => {
  const { challangesCompleted } = useContext(ChallangesContext);
  return (
    <div className={styles.desafiosCompletos}>
      <span>Desafios completos</span>
      <span>{challangesCompleted}</span>
    </div>
  );
};
