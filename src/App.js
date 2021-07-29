import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Results from './components/Results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  handleSearchTermSubmit(songs) {
    this.setState({songs: songs});
  }

  render() {
    return (
      <div className="site-padding">
        <SearchBar onSearchTermSubmit={e => this.handleSearchTermSubmit(e)} />
        <Results songs={this.state.songs} />
      </div>
    );
  }
}

export default App;
