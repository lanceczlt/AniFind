import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/search';
import { Link, Paper, Grid , ImageListItem, Typography} from '@mui/material';
import './AnimeCard.scss';

// const theme = createTheme({
//     components: {
//       // Name of the component
//       ImageListItem: {
//         styleOverrides: {
//           // Name of the slot
//           root: {
//             // Some CSS
//             variant="standard",
//           },
//         },
//       },
//     },
//   });
  


const AnimeCard = (props) => {
  const navigate = useNavigate();
  const search = useContext(SearchContext);
  const onClickHandler = (event) => {
    event.preventDefault();
    fetch(`https://api.jikan.moe/v4/anime/${props.anime.mal_id}`) 
      .then((response) => response.json())
      .then((data) => {
        search.setSingle(data);
        localStorage.setItem('singleData', JSON.stringify(data));
        navigate('/single-view');
      });
  };


  const title = props.anime.title.length > 13 ? `${props.anime.title.substring(0, 13)}...` : props.anime.title;
  const imageUrl = props.anime.images.jpg.image_url;
  const synopsis =  props.anime.synopsis == null ? null : props.anime.synopsis.length > 30 ? `${props.anime.synopsis.substring(0, 30)}...` : props.anime.synopsis;

  return (
    <ImageListItem variant="standard" className="animecard-container" >
      <Grid container item>
        <Paper className="animecard-paper" style={{height:400, maxHeight:400, width: 200, maxWidth:200}}>
          <img src={imageUrl} alt={title} style={{ width: 200, height: 300 }}/>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="h2" paragraph={true}>
            {synopsis}
          </Typography>
          <Link
            component="button"
            variant="body1"
            style={{ marginBottom: 0 }}
            onClick={onClickHandler}
          >
            Learn More
          </Link>
        </Paper>
      </Grid>
    </ImageListItem>
  );
};

export default AnimeCard;

