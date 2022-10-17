import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import './SingleAnime.scss';

const SingleAnime = (props) => {
  // console.log( props);

  const title = props.info.data.title;
  // console.log("title: " + title)
  const imageUrl = props.info.data.images.jpg.image_url;
  // console.log("image url: " + imageUrl)
  const rating = props.info.data.rating;
  const airing = props.info.data.status == null ? "No airing data found: " : props.info.data.status
  // console.log('airing data: ' + airing)
  const broadcast = props.info.data.broadcast.string == null ? "No broadcast data found" : props.info.data.broadcast.string ;
  // console.log('broad data: ' + broadcast)
  const score = props.info.data.score == null ? "Not scored" : props.info.data.score ;
  // console.log('score data: ' + score)
  const url = props.info.data.url;
  // console.log('url: ' + url)
  const episodes = props.info.data.episodes == null ? "No episodes released yet" : props.info.data.episodes;


  return (
    <Grid
      container
      spacing={10}
      direction="row"
      justify="center"
      justifyContent="center"
      alignItems="center"
      className="singleanime__container"
    >
      <Grid item xs="auto">
        <img src={imageUrl} alt={title} className="singleanime__image" />
      </Grid>
      <Grid item >
        <Paper elevation={3} className="singleanime__description">
          <Typography variant="h4" component="h2">
            {title}
          </Typography>
          <Typography variant="h5" component="h2">
            Airing: {airing}
          </Typography>
          <Typography variant="h5" component="h2">
            Score: {score}
          </Typography>
          <Typography variant="h5" component="h2">
            Broadcast: {broadcast}
          </Typography>
          <Typography variant="h5" component="h2">
            Rating: {rating}
          </Typography>
          <Typography variant="h5" component="h2">
            Episodes: {episodes}
          </Typography>
          <a href={url}>
              MyAnimeList
          </a>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SingleAnime;