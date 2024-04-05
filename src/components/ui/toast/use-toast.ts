'use client';

import { useEffect, useState } from 'react';
import { TOAST_LIMIT, TOAST_REMOVE_DELAY } from './constants';
import { Action, ActionType, State, ToasterToast, ToastReturn, ToastType, UseToastReturn } from './types';

// Inspired by react-hot-toast library
let count = 0;
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();
const listeners: Array<(state: State) => void> = [];
let memoryState: State = { toasts: [] };

const genId = (): string => {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
};

const addToRemoveQueue = (toastId: string): void => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    dispatch({
      type: ActionType.REMOVE_TOAST,
      toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.ADD_TOAST:
      return {
        ...state,
        toasts: [ action.toast, ...state.toasts ].slice(0, TOAST_LIMIT),
      };
    case ActionType.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t: ToasterToast) => {
          return (t.id === action.toast.id ? { ...t, ...action.toast } : t);
        }),
      };
    case ActionType.DISMISS_TOAST: {
      const { toastId } = action;
      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((individualToast: ToasterToast) => {
          addToRemoveQueue(individualToast.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map((t: ToasterToast) => {
          return (t.id === toastId || toastId === undefined
            ? {
              ...t,
              open: false,
            }
            : t);
        }),
      };
    }
    case ActionType.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => { return t.id !== action.toastId; }),
      };
    default:
      return state;
  }
};

function dispatch(action: Action): void {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

const toast = ({ ...toastProps }: ToastType): ToastReturn => {
  const id = genId();

  const update = (updatedToastProps: ToasterToast): void => {
    return dispatch({
      type: ActionType.UPDATE_TOAST,
      toast: { ...updatedToastProps, id },
    });
  };

  const dismiss = (): void => {
    return dispatch({
      type: ActionType.DISMISS_TOAST,
      toastId: id,
    });
  };

  dispatch({
    type: ActionType.ADD_TOAST,
    toast: {
      ...toastProps,
      id,
      open: true,
      onOpenChange: (open): void => {
        if (open) return;
        dismiss();
      },
    },
  });

  return {
    id,
    dismiss,
    update,
  };
};

const useToast = (): UseToastReturn => {
  const [ state, setState ] = useState<State>(memoryState);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (-1 >= index) {
        return;
      }
      listeners.splice(index, 1);
    };
  }, [ state ]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => {
      return dispatch({
        type: ActionType.DISMISS_TOAST,
        toastId,
      });
    },
  };
};

export { useToast, toast };
