import React, { createContext, ReactNode, useEffect, useState } from 'react';
import challanges from '../../challanges.json';

interface Challange {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

export interface ChallangeContextData {
  level: number;
  xp: number;
  xpToNextLevel: number;
  challangesCompleted: number;
  activeChallange: Challange;
  levelUp: () => void;
  startNewChallange: () => void;
  resetChallange: () => void;
  completeChallange: () => void;
}

export const ChallangesContext = createContext({} as ChallangeContextData);

export const ChallangesProvider: React.FC<ReactNode> = ({ children }) => {
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [challangesCompleted, setChallangesCompletes] = useState(0);
  const [activeChallange, setActiveChallange] = useState<Challange>(null);

  const xpToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const levelUp = () => {
    setLevel(level + 1);
  };

  const resetChallange = () => {
    setActiveChallange(null);
  };

  const startNewChallange = () => {
    const index = Math.floor(Math.random() * challanges.length);
    const challange = (challanges[index] as unknown) as Challange;

    setActiveChallange(challange);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo Desafio 🎉', {
        body: `Valendo ${challange.amount} xp!`,
      });
    }
  };

  const completeChallange = () => {
    if (!activeChallange) {
      return;
    }

    const { amount } = activeChallange;

    let finalXp = xp + amount;
    if (finalXp >= xpToNextLevel) {
      finalXp = finalXp - xpToNextLevel;
      levelUp();
    }

    setXp(finalXp);
    setActiveChallange(null);
    setChallangesCompletes(challangesCompleted + 1);
  };

  return (
    <ChallangesContext.Provider
      value={{
        level,
        xp,
        xpToNextLevel,
        activeChallange,
        challangesCompleted,
        levelUp,
        startNewChallange,
        resetChallange,
        completeChallange,
      }}
    >
      {children}
    </ChallangesContext.Provider>
  );
};
