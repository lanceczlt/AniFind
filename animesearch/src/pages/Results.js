import { Box} from '@mui/system';
import { Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import AnimeList from '../components/AnimeList';
import { SearchContext } from '../context/search';

const Results = () => {
  const search = useContext(SearchContext);
  const [dataExists, setDataExists] = useState(true);


  useEffect(() => {
    if (search.animeData === undefined || search.animeData.length === 0) {
      try {
        search.setData(JSON.parse(localStorage.getItem('searchData')));
        setDataExists(true);
      } catch (error) {
        console.log("results error "+ error);
        setDataExists(false);
      }
    }
  }, [search]);

  return (
    // <Box>{(dataExists && <AnimeList data={search.animeData} />) || 'Data does not exist'}</Box>
    <Box mt={2}>
      {(dataExists && <AnimeList data={search.animeData} />) || (
        <Typography>No Data Exists</Typography>
      )}
    </Box>
  );
};

export default Results;