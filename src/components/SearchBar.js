import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { Radio, RadioGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  radioGroup: {
    paddingLeft: '1.5rem'
  }
})

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      viewType: 'card'
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

  handleViewTypeChange(e) {
    this.setState({ viewType: e.target.value });
    this.props.onViewTypeSwitch(e.target.value);
  }

  render() {
    const { classes } = this.props;
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
              <RadioGroup row
                className={classes.radioGroup}
                value={this.state.viewType}
                onChange={e => this.handleViewTypeChange(e)}>
                <FormControlLabel value="card" control={<Radio />} label="Card View" />
                <FormControlLabel value="table" control={<Radio />} label="Table View" />
              </RadioGroup>
            </FormGroup>
          </FormControl>
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles)(SearchBar);