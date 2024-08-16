import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import CategoryFilter from './CategoryFilter';
import PaginationControl from './Pagination';
import MovieDetailModal from './MovieDetailModal'; 
import Grid from '@mui/material/Grid';

function MovieList() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movies = useSelector((state) => state.movies);

  const filteredMovies = selectedCategories.length
    ? movies.filter(movie => selectedCategories.includes(movie.category))
    : movies;

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedMovies = filteredMovies.slice(startIndex, startIndex + itemsPerPage);

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <CategoryFilter setSelectedCategories={setSelectedCategories} />
      <Grid container spacing={2}>
        {paginatedMovies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <MovieCard 
              movie={movie} 
              onCardClick={() => handleOpenModal(movie)}
            />
          </Grid>
        ))}
      </Grid>
      <PaginationControl
        page={page}
        setPage={setPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        totalItems={filteredMovies.length}
      />
      <MovieDetailModal movie={selectedMovie} onClose={handleCloseModal} />
    </div>
  );
}

export default MovieList;
