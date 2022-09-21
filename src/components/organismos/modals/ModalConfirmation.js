import React from "react";
import Modal from "../../moleculas/Modal";

export const ModalConfirmation = ({ isOpen, onClose, title }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      center
      className="px-6 pb-8 max-h-[80vh] w-[40vw] overflow-y-scroll"
    >
      <div className="mt-4 text-center text-xl">
        Se ha cambiado con éxito el rol de este usuario
      </div>
    </Modal>
  );
};
