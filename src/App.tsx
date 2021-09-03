import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Header from './components/Header';
import * as api from './api';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Track from './interfaces/track.interface';

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

interface IProps { }

interface IState {
  token: string;
  songs: Track[];
  viewType: string;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      token: '',
      songs: [],
      viewType: 'card'
    };
  }

  async componentDidMount() {
    const token = await api.getToken();
    this.setState({ token });
  }

  async handleSearchTermSubmit(searchTerm: string) {
    const songs = await api.getSongsData(this.state.token, searchTerm);
    this.setState({ songs });
  }

  handleViewTypeSwitch(viewType: string) {
    this.setState({ viewType });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="site-padding">
          <Header/>
          <SearchBar 
            onSearchTermSubmit={(e: string) => this.handleSearchTermSubmit(e)}
            onViewTypeSwitch={(e: string) => this.handleViewTypeSwitch(e)}/>
          { this.state.songs.length > 0 && 
            <Results tracks={this.state.songs} viewType={this.state.viewType} />
          }
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
