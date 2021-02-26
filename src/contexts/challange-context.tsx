import React, { createContext, ReactNode, useEffect, useState } from 'react';
import challanges from '../../challanges.json';
import { set as save } from 'js-cookie';
import { Cookies } from '../utils/types';

import { LevelUpModal } from '../components/level-up-modal';
interface Challange {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallangesProviderProps {
  children: ReactNode;
  cookies: Cookies;
}

interface ChallangeContextData {
  level: number;
  currentExperience: number;
  xpToNextLevel: number;
  challangesCompleted: number;
  activeChallange: Challange;
  levelUp: () => void;
  startNewChallange: () => void;
  resetChallange: () => void;
  completeChallange: () => void;
  closeModal: () => void;
}

export const ChallangesContext = createContext({} as ChallangeContextData);

export const ChallangesProvider: React.FC<ChallangesProviderProps> = ({
  children,
  cookies,
}) => {
  const [level, setLevel] = useState(cookies.level || 1);
  const [currentExperience, setXp] = useState(cookies.currentExperience || 0);
  const [challangesCompleted, setChallangesCompletes] = useState(
    cookies.challangesCompleted || 0
  );
  const [activeChallange, setActiveChallange] = useState<Challange>(null);
  const [isModalOpen, setIsModalUp] = useState(false);

  const xpToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    save('level', String(level));
    save('currentExperience', String(currentExperience));
    save('challangesCompleted', String(challangesCompleted));
  }, [level, currentExperience, challangesCompleted]);

  const levelUp = () => {
    setLevel(level + 1);
    setIsModalUp(true);
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

    let finalXp = currentExperience + amount;
    if (finalXp >= xpToNextLevel) {
      finalXp = finalXp - xpToNextLevel;
      levelUp();
    }

    setXp(finalXp);
    setActiveChallange(null);
    setChallangesCompletes(challangesCompleted + 1);
  };

  const closeModal = () => {
    setIsModalUp(false);
  };

  return (
    <ChallangesContext.Provider
      value={{
        level,
        currentExperience,
        xpToNextLevel,
        activeChallange,
        challangesCompleted,
        levelUp,
        startNewChallange,
        resetChallange,
        completeChallange,
        closeModal,
      }}
    >
      {children}
      {isModalOpen && <LevelUpModal />}
    </ChallangesContext.Provider>
  );
};
