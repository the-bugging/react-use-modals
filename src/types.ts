import { MutableRefObject } from 'react';

export interface UseModalsReturnType extends Array<any> {
  0: MutableRefObject<HTMLDialogElement | null>;
  1: boolean;
  2: () => void;
  3: () => void;
  modalRef: MutableRefObject<HTMLDialogElement | null>;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export interface UseModalsOptions {
  closeOnBackdropClick?: boolean;
  preventCloseOnEscape?: boolean;
  onCloseCallback?: (modalId?: string) => void;
}
