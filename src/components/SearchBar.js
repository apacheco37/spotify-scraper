import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { getSongsData } from '../api';
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

  async handleClick() {
    let songs = await getSongsData(this.state.searchTerm);
    this.setState({ songs: songs });
  }

  render() {
    return (
      <div>
        <h1>Please input the name of the song:</h1>
        <TextField 
          id="outlined-basic"
          label="Song name"
          variant="outlined"
          size="small"
          onChange={e => this.handleOnChange(e)}
          value={this.state.searchTerm} />
        <Button
          variant="contained"
          color="default"
          onClick={(e) => this.handleClick(e)}
        >Search</Button>
        <Results songs={this.state.songs} />
      </div>
    );
  }
}

export default SearchBar;