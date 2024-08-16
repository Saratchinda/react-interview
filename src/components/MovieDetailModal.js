import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './MovieDetailModal.css';

function MovieDetailModal({ movie, onClose }) {
  return (
    <Dialog open={!!movie} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent className="modal-content">
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          className="modal-close-button"
        >
          <CloseIcon />
        </IconButton>
        <div className="modal-image-container">
          <img
            src={movie?.image}
            alt={movie?.title}
            className="modal-image"
          />
        </div>
        <div className="modal-details">
          <h2 className="modal-title">{movie?.title}</h2>
          <p className="modal-category">{movie?.category}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default MovieDetailModal;
