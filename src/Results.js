import React from 'react';

class Results extends React.Component {

  render() {
    return (
      <div>
        {this.props.songs.map((song, index) => (
          <div key={index}>
            <h3>Name: {song.name}</h3>
            <p>Artist: {song.artists[0].name}</p>
            <p>Popularity: {song.popularity}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Results;