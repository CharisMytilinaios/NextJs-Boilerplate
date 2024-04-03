import { useMedia } from 'react-use';

export const useXlScreens = (): boolean => {
  return useMedia('(min-width: 1536px)', true);
};

export const useLgScreens = (): boolean => {
  return useMedia('(max-width: 1200px)', false);
};

export const useMdScreens = (): boolean => {
  return useMedia('(max-width: 900px)', false);
};

export const useSmScreens = (): boolean => {
  return useMedia('(max-width: 600px)', false);
};
