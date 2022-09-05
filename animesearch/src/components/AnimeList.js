
import AnimeCard from './AnimeCard';
import { ImageList } from '@mui/material';
import './AnimeList.css'

const AnimeList = (props) => {
  return (
    <ImageList className="animelist__container">
        {console.log(props.data)}
      {props.data.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </ImageList>
  );
};

export default AnimeList;