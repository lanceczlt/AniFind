import React, {useContext, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Toolbar, Typography , InputBase, Box, IconButton} from '@mui/material';

import { SearchContext } from '../context/search';
import { useNavigate } from 'react-router-dom';

const Search = styled('form')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {

  const navigate = useNavigate();
  const search = useContext(SearchContext);
  const [input, setInput] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    search.search(input).then((data) => {
        console.log(data);
      search.setData(data.data);
      localStorage.setItem('searchData', JSON.stringify(data.results));
      navigate('/results');
    });
  };

  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton color="inherit" sx={{ mr: 2 }} onClick={() => {
                        navigate("/")
                    }}>
              <img alt="gato-logo" src={`${process.env.PUBLIC_URL}/gato-logo.png`} height={40} />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
              AniFind
              </Typography>
            </IconButton>
            <Search onSubmit={handleSearch}> 
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
            </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
