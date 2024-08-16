import React from 'react';
import { useSelector } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

function CategoryFilter({ setSelectedCategories }) {
  const movies = useSelector((state) => state.movies);
  const categories = [...new Set(movies.map(movie => movie.category))];

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  return (
    <FormGroup row>
      {categories.map(category => (
        <FormControlLabel
          key={category}
          control={<Checkbox onChange={() => handleCategoryChange(category)} />}
          label={category}
        />
      ))}
    </FormGroup>
  );
}

export default CategoryFilter;
