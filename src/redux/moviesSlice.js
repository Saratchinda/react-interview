import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => action.payload,
    toggleReaction: (state, action) => {
      const { id, reaction } = action.payload;
      const movie = state.find(m => m.id === id);
      if (movie) {
        if (reaction === 'liked') {
          movie.userReaction = movie.userReaction === 'liked' ? 'neutral' : 'liked';
          movie.likes += movie.userReaction === 'liked' ? 1 : -1;
          if (movie.userReaction === 'disliked') movie.dislikes--;
        } else if (reaction === 'disliked') {
          movie.userReaction = movie.userReaction === 'disliked' ? 'neutral' : 'disliked';
          movie.dislikes += movie.userReaction === 'disliked' ? 1 : -1;
          if (movie.userReaction === 'liked') movie.likes--;
        }
      }
    },
    deleteMovie: (state, action) => state.filter(movie => movie.id !== action.payload),
  },
});

export const { setMovies, toggleReaction, deleteMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
