import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMovies } from './redux/moviesSlice';
import { fetchMovies } from './movies';
import MovieList from './components/MovieList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovies().then((data) => {
      dispatch(setMovies(data));
    });
  }, [dispatch]);

  return (
    <div className="App">
      <MovieList />
    </div>
  );
}

export default App;
