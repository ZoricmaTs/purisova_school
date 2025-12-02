import {type ReactNode, useEffect } from "react";
import './style.scss';
import {XIcon} from '@phosphor-icons/react';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function Modal({ open, onClose, children }: ModalProps) {
  // Закрытие по ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handler);

    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
    >
      <div className="modal-wrapper">
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
        <button className="modal-button"><XIcon size={32} /></button>
      </div>
    </div>
  );
}
