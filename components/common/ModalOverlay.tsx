import React from 'react';

interface ModalProps {
    isOpen: boolean;
    handleClose: () => void;
    children: React.ReactNode;
};

const Modal = ({ isOpen, handleClose, children }: ModalProps) => {
    return (
        <>
            {isOpen ? (
                <div onClick={() => handleClose()} className="absolute z-50 inset-0 overflow-y-hidden opacity-75 bg-gray-800  grid place-items-center">
                    {children}

                </div>
            ) : null}
        </>
    );
};

export default Modal;
