import AnimeCard from './AnimeCard';
import { ImageList } from '@mui/material';
import './AnimeList.scss'

const AnimeList = (props) => {
  return (
    <ImageList variant='standard' cols={7} gap={1} >
      {props.data.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </ImageList>
  );
};

export default AnimeList;