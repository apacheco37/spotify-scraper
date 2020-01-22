import React from 'react';

class Results extends React.Component {

  render() {
    return (
      <div>
        {this.props.songs.map((song, index) => (
          <div key={index}>
            <h3>{song.name}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default Results;