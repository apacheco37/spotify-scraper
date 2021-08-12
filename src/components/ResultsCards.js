import React from 'react';
import Card from '@material-ui/core/Card';

export default function ResultsCards(props) {
  return (
    <div>
      {props.songs.map((song) => (
        <Card variant="outlined" key={song.id}>
          <div className="card-content">
            <h3>Name: {song.name}</h3>
            <p>Artist: {song.artists[0].name}</p>
            <p>Popularity: {song.popularity}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}