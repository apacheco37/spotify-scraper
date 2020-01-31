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
    const params = 'grant_type=client_credentials';
    const encodedString = new Buffer('7c0b9ed0ae194c888450394069d7cb59:81177d6e289e424c84ce9a21a8b2f775').toString('base64');
    const headers = {
      headers: {
        'Authorization': `Basic ${encodedString}`,
        'content-type': 'application/x-www-form-urlencoded'
      }
    }

    axios.post(`https://accounts.spotify.com/api/token`, params, headers).then(res => {
      this.callGet(res.data.access_token);
    }).catch(err => {
      console.log(`POST ERROR: ` + err);
    });
  }

  callGet(token) {
    const headers = {
      headers: {
        'Authorization': `Bearer ` + token
      }
    };

    axios.get(`https://api.spotify.com/v1/search?q=${this.state.searchTerm}&type=track`, headers).then(res => {
      this.setState({ songs: res.data.tracks.items });
    }).catch(err => {
      console.log("GET ERROR: " + err);
    });
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
        <button onClick={(e) => this.handleClick(e)}>Search</button>
        <Results songs={this.state.songs} />
      </div>
    );
  }
}

export default SearchBar;