import React from 'react';
import axios from 'axios';

import Results from './Results';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      songs: []
    };
  }

  handleOnChange = e => {
    this.setState({ searchTerm: e.target.value })
  }

  handleClick() {
    let token = '';

    axios.post(
      `https://accounts.spotify.com/api/token`,
      {
        'grant_type	': 'client_credentials'
      },
      {
        headers: {
          'Authorization': `Basic 7c0b9ed0ae194c888450394069d7cb59:81177d6e289e424c84ce9a21a8b2f775`
        }
      }).then(res => {
        console.log(res);
        this.token = res.data.access_token;
      }).catch(err => {
        console.log(err);
      });

    axios.get(`https://api.spotify.com/v1/search?q=herzeleid&type=track`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(res => {
      const songs = res.data;
      this.setState({ songs: songs });
    })
  }

  render() {
    return (
      <div>
        <h1>Please input the name of the song:</h1>
        <input
          name="text"
          type="text"
          placeholder="Song name"
          onChange={e => this.handleOnChange(e)}
          value={this.state.searchTerm}
        />
        <button onClick={this.handleClick}>Search</button>
        <Results songs={this.state.songs} />
      </div>
    );
  }
}

export default SearchBar;