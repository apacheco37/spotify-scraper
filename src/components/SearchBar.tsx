import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { Radio, RadioGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Theme, WithStyles, withStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  radioGroup: {
    paddingLeft: '1.5rem'
  }
})

interface IProps extends WithStyles<typeof styles>{
  onSearchTermSubmit: Function;
  onViewTypeSwitch: Function;
}

interface IState {
  searchTerm: string;
  viewType: string;
}

class SearchBar extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      searchTerm: '',
      viewType: 'card'
    };
  }

  handleOnChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    this.setState({ searchTerm: e.target.value })
  }

  async handleClick(e: React.SyntheticEvent) {
    e.preventDefault();
    if (this.state.searchTerm !== '') {
      this.props.onSearchTermSubmit(this.state.searchTerm);
    }
  }

  handleViewTypeChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ viewType: e.target.value });
    this.props.onViewTypeSwitch(e.target.value);
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
              <RadioGroup row
                className={this.props.classes.radioGroup}
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

export default withStyles(styles)(SearchBar);