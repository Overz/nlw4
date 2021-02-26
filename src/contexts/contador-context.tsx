import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ChallangesContext } from './challange-context';
import ms from 'ms';
import { required } from '../utils/constants';

export interface ContadorContexData {
  isActive: boolean;
  hasFinished: boolean;
  minutes: number;
  seconds: number;
  startCount: () => void;
  resetCounter: () => void;
}

let timeout!: NodeJS.Timeout;
const t = required ? ms('25m') : 0.1 * 20;

export const ContadorContext = createContext({} as ContadorContexData);

export const ContadorProvider: React.FC<ReactNode> = ({ children }) => {
  const { startNewChallange } = useContext(ChallangesContext);
  const [time, setTime] = useState(t);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const startCount = () => {
    setIsActive(true);
  };

  const resetCounter = () => {
    clearTimeout(timeout);
    setIsActive(false);
    setTime(t);
    setHasFinished(false);
  };

  useEffect(() => {
    if (isActive && time) {
      timeout = setTimeout(() => {
        setTime(time - 1);
      }, ms('1s'));
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallange();
    }
  }, [isActive, time]);

  return (
    <ContadorContext.Provider
      value={{
        isActive,
        hasFinished,
        minutes,
        resetCounter,
        seconds,
        startCount,
      }}
    >
      {children}
    </ContadorContext.Provider>
  );
};
