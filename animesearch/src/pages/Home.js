import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/search'
import { FormControl, Input, IconButton, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
// import './Home.scss';

const Home = () => {



    const navigate = useNavigate();
    const search = useContext(SearchContext);
    const [input, setInput] = useState('');

    // useEffect(() => {
    //     search.search('Naruto').then((data) => {
    //         console.log(data);
    //     });
    // },[search])

    const handleSearch = (event) => {
        event.preventDefault();
        search.search(input).then((data) => {
            console.log(data);
          search.setData(data.results);
          localStorage.setItem('myData', JSON.stringify(data.results));
          navigate('/results');
        });
      };
    
    return (
        <Grid containerdirection="column" justify="center" alignItems="center" alignContent="center">
        <Grid item>
          <Grid item>
            <img
              alt="luffy"
              src={process.env.PUBLIC_URL + '/luffy.png'}
              height={420}
              width={550}
            />
          </Grid>
          <Grid item>
            <form className="home__form">
              <FormControl type="submit" className="home__formControl">
                <Input
                  placeholder="Search for you favorite anime..."
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  className="home__input"
                />
                <IconButton
                  className="home__iconButton"
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!input}
                  onClick={handleSearch}
                >
                  <SearchIcon />
                </IconButton>
              </FormControl>
            </form>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default Home
