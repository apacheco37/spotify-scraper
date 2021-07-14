import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div className="site-padding">
        <SearchBar />
      </div>
    );
  }
}

export default App;
