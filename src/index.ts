import { useCallback, useEffect, useRef, useState } from 'react';
import { UseModalsOptions, UseModalsReturnType } from './types';

const useModals = (props?: UseModalsOptions): UseModalsReturnType => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const { closeOnBackdropClick, preventCloseOnEscape, onCloseCallback } =
    props || {};

  const openModal = useCallback(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      modalElement.showModal();
      setIsOpen(true);
    }
  }, []);

  const closeModal = useCallback(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      modalElement.close();
      setIsOpen(false);
      onCloseCallback?.(modalElement.id);
    }
  }, [onCloseCallback]);

  const handleBackdropClick = useCallback(
    (e: MouseEvent) => {
      const modalElement = modalRef.current;

      if (modalElement) {
        const dialogDimensions = modalElement.getBoundingClientRect();

        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          closeModal();
        }
      }
    },
    [closeModal]
  );

  const handleEscapePress = useCallback(
    (e) => {
      if (preventCloseOnEscape) {
        return e.preventDefault();
      }

      return closeModal();
    },
    [preventCloseOnEscape, closeModal]
  );

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      modalElement.addEventListener('cancel', handleEscapePress);
    }

    return () => {
      if (modalElement) {
        modalElement.removeEventListener('cancel', handleEscapePress);
      }
    };
  }, [handleEscapePress]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (closeOnBackdropClick && modalElement) {
      modalElement.addEventListener('click', handleBackdropClick);
    }

    return () => {
      if (closeOnBackdropClick && modalElement) {
        modalElement.removeEventListener('click', handleBackdropClick);
      }
    };
  }, [closeOnBackdropClick, handleBackdropClick]);

  const result = [
    modalRef,
    isOpen,
    openModal,
    closeModal,
  ] as UseModalsReturnType;

  Object.assign(result, {
    modalRef,
    isOpen,
    openModal,
    closeModal,
  });

  return result;
};

export default useModals;
