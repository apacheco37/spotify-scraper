import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Header from './components/Header';
import * as api from './api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      songs: []
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
    this.setState({songs});
  }

  render() {
    return (
      <div className="site-padding">
        <Header/>
        <SearchBar onSearchTermSubmit={e => this.handleSearchTermSubmit(e)} />
        <Results songs={this.state.songs} />
      </div>
    );
  }
}

export default App;
