import React from 'react';
import Pagination from '@mui/material/Pagination';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function PaginationControl({ page, setPage, itemsPerPage, setItemsPerPage, totalItems }) {
  const handlePageChange = (event, value) => setPage(value);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
      <Pagination
        count={Math.ceil(totalItems / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
      />
      <FormControl>
        <InputLabel>Items per page</InputLabel>
        <Select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(e.target.value)}
        >
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default PaginationControl;
