import React, { useContext } from 'react';
import { ChallangesContext } from '../contexts/challange-context';
import styles from '../styles/components/experience-bar.module.css';

export const ExperienceBar: React.FC = () => {
  const { xp, xpToNextLevel } = useContext(ChallangesContext);

  const percentToNextLevel = Math.round(xp * 100) / xpToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {xp} xp
        </span>
      </div>
      <span>{xpToNextLevel} xp</span>
    </header>
  );
};
