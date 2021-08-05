import React from 'react';
import Card from '@material-ui/core/Card';
import './Results.css';

class Results extends React.Component {

  render() {
    return (
      <div className="results-panel">
        {this.props.songs.map((song, index) => (
          <Card variant="outlined" key={index}>
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
}

export default Results;