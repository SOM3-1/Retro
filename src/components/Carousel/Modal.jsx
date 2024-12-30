// src/components/Modal.js
import React from 'react';
import './Modal.css'; // Add styles for the modal

const Modal = ({ isOpen, onClose, game }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
        <div className="modal-content">
    <button className="close-button" onClick={onClose}>×</button>
    <div className="modal-image-wrapper">
        <img src={game.imgSrc} alt={game.title} className="modal-image" />
    </div>
    <h2 className="game-title">{game.title}</h2>
    <p className="game-description">{game.description}</p>
</div>

    </div>
  );
};

export default Modal;
