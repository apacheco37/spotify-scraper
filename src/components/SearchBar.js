import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { getSongsData } from '../api';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  handleOnChange = e => {
    this.setState({ searchTerm: e.target.value })
  }

  async handleClick() {
    const songs = await getSongsData(this.state.searchTerm);
    this.props.onSearchTermSubmit(songs);
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
      </div>
    );
  }
}

export default SearchBar;