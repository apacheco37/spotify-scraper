import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

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

  async handleClick(e) {
    e.preventDefault();
    if (this.state.searchTerm !== '') {
      this.props.onSearchTermSubmit(this.state.searchTerm);
    }
  }

  render() {
    return (
      <div>
        <h2>Please input the name of the song:</h2>
        <form onSubmit={e => this.handleClick(e)}>
          <FormControl>
            <FormGroup row>
              <TextField
                id="outlined-basic"
                label="Song name"
                variant="outlined"
                size="small"
                onChange={e => this.handleOnChange(e)}
                value={this.state.searchTerm} />
              <Button
                type="submit"
                variant="contained"
                color="default"
              >Search</Button>
            </FormGroup>
          </FormControl>
        </form>
      </div>
    );
  }
}

export default SearchBar;