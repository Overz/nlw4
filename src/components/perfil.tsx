import React from 'react';
import styles from '../styles/components/perfil.module.css';

const Perfil: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Overz.png" alt="#" />
      <div>
        <strong>Christian Lima</strong>
        <p>
          <img src="icons/level.svg" alt="#" />
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Perfil;
