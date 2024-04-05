import { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';
import Toast from '.';
import ToastAction from './toast-action';

export type ToastProps = ComponentPropsWithoutRef<typeof Toast>;

export type ToastActionElement = ReactElement<typeof ToastAction>;

export enum ActionType {
    ADD_TOAST = 'ADD_TOAST',
    UPDATE_TOAST = 'UPDATE_TOAST',
    DISMISS_TOAST = 'DISMISS_TOAST',
    REMOVE_TOAST = 'REMOVE_TOAST',
}

export type ToasterToast = ToastProps & {
    id: string;
    title?: ReactNode;
    description?: ReactNode;
    action?: ToastActionElement;
};

export type Action =
    | { type: ActionType.ADD_TOAST; toast: ToasterToast }
    | { type: ActionType.UPDATE_TOAST; toast: Partial<ToasterToast> }
    | { type: ActionType.DISMISS_TOAST; toastId?: string }
    | { type: ActionType.REMOVE_TOAST; toastId?: string };

export interface State {
    toasts: ToasterToast[];
}

export type ToastType = Omit<ToasterToast, 'id'>;

export type ToastReturn = {
    id: string;
    dismiss: () => void;
    update: (updatedToastProps: ToasterToast) => void
}

export type UseToastReturn = {
    toasts: ToasterToast[];
    toast: (toastProps: ToastType) => ToastReturn;
    dismiss: (toastId?: string) => void;
}

