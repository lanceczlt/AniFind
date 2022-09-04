// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { SearchContext } from '../context/search';
// import { Typography } from '@mui/material';
// import { Link, Paper, Grid , ImageListItem} from '@mui/material';
// // import './AnimeCard.scss';

// const AnimeCard = (props) => {
//   const history = useNavigate();

//   const search = useContext(SearchContext);

//   const onClickHandler = (event) => {
//     event.preventDefault();
//     fetch(`https://api.jikan.moe/v3/anime/${props.anime.mal_id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         search.setSingle(data);
//         localStorage.setItem('singleData', JSON.stringify(data));
//         history.push('/single-view');
//       });
//   };

//   const title =
//     props.anime.title.length > 20
//       ? `${props.anime.title.substring(0, 15)}...`
//       : props.anime.title;
//   const imageUrl = props.anime.image_url;
//   const synopsis =
//     props.anime.synopsis.length > 30
//       ? `${props.anime.synopsis.substring(0, 30)}...`
//       : props.anime.synopsis;

//   return (
//     <ImageListItem className="animecard__container">
//       <Grid container item xs={12}>
//         <Paper className="animecard__paper">
//           <img src={imageUrl} alt={title} style={{ maxHeight: 300 }} />
//           <Typography variant="h5" component="h2">
//             {title}
//           </Typography>
//           <Typography variant="body2" component="h2" paragraph={true}>
//             {synopsis}
//           </Typography>
//           <Link
//             component="button"
//             variant="body1"
//             style={{ marginBottom: 0 }}
//             onClick={onClickHandler}
//           >
//             Learn More
//           </Link>
//         </Paper>
//       </Grid>
//     </ImageListItem>
//   );
// };

// export default AnimeCard;