import React from 'react';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import DeleteIcon from '@mui/icons-material/Delete';
import LinearProgress from '@mui/material/LinearProgress';
import { toggleReaction, deleteMovie } from '../redux/moviesSlice';
import './MovieCard.css';

function MovieCard({ movie, onCardClick }) {
  const dispatch = useDispatch();
  
  const handleToggle = (reaction) => {
    dispatch(toggleReaction({ id: movie.id, reaction }));
  };

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id));
  };

  const ratio = movie.likes + movie.dislikes > 0 
    ? (movie.likes / (movie.likes + movie.dislikes)) * 100
    : 0;

  return (
    <Card 
      className="movie-card" 
      onClick={(e) => {
        if (e.target.closest('.movie-action')) return;
        onCardClick(); 
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">{movie.title}</Typography>
        <Typography color="textSecondary">{movie.category}</Typography>
        <img src={movie.image} alt={movie.title} className="movie-image" />
        <LinearProgress 
          variant="determinate" 
          value={ratio} 
          sx={{ height: 10, borderRadius: 5, marginTop: 1 }}
          className="progress-bar"
        />
        <div className="movie-actions">
          <IconButton onClick={(e) => { e.stopPropagation(); handleToggle('liked'); }} className="movie-action">
            <ThumbUpIcon color={movie.userReaction === 'liked' ? 'primary' : 'inherit'} />
            {movie.likes}
          </IconButton>
          <IconButton onClick={(e) => { e.stopPropagation(); handleToggle('disliked'); }} className="movie-action">
            <ThumbDownIcon color={movie.userReaction === 'disliked' ? 'secondary' : 'inherit'} />
            {movie.dislikes}
          </IconButton>
          <IconButton onClick={(e) => { e.stopPropagation(); handleDelete(); }} className="movie-action">
            <DeleteIcon color="error" />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
