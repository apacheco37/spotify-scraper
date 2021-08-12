import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Header from './components/Header';
import * as api from './api';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#1DB954', // https://usbrandcolors.com/spotify-colors/
    },
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      songs: [],
      viewType: 'card'
    };
  }

  async componentDidMount() {
    const token = await api.getToken();
    this.setState({
      token
    });
  }

  async handleSearchTermSubmit(searchTerm) {
    const songs = await api.getSongsData(this.state.token, searchTerm);
    this.setState({ songs });
  }

  handleViewTypeSwitch(viewType) {
    this.setState({ viewType });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="site-padding">
          <Header/>
          <SearchBar 
            onSearchTermSubmit={e => this.handleSearchTermSubmit(e)}
            onViewTypeSwitch={e => this.handleViewTypeSwitch(e)}/>
          {this.state.songs.length > 0 && 
            <Results songs={this.state.songs} viewType={this.state.viewType} />
          }
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
