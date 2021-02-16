import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div class="site-padding">
        <SearchBar />
      </div>
    );
  }
}

export default App;
