import Card from '@material-ui/core/Card';
import Track from '../interfaces/track.interface';

interface IProps {
  tracks: Track[];
}

export default function ResultsCards(props: IProps) {
  return (
    <div>
      {props.tracks.map((track) => (
        <Card variant="outlined" key={track.id}>
          <div className="card-content">
            <h3>Name: {track.name}</h3>
            <p>Artist: {track.artists[0].name}</p>
            <p>Popularity: {track.popularity}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}