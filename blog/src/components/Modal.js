import React from 'react';
import '../App.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
