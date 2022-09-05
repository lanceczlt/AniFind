import AnimeCard from './AnimeCard';
import { ImageList , ImageListItem} from '@mui/material';


const AnimeList = (props) => {
  return (
    <ImageList cols={7} gap={1} rowHeight={500}>
      {props.data.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </ImageList>
  );
};

export default AnimeList;