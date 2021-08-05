import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  handleSearchTermSubmit(songs) {
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
