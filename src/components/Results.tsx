import React from 'react';
import Track from '../interfaces/track.interface';
import './Results.css';
import ResultsCards from './ResultsCards';
import ResultsTable from './ResultsTable';

interface IProps {
  viewType: string;
  tracks: Track[];
}

class Results extends React.Component<IProps> {

  render() {
    let results;
    if (this.props.viewType === 'card') {
      results = <ResultsCards tracks={this.props.tracks}></ResultsCards>;
    } else if (this.props.viewType === 'table') {
      results = <ResultsTable tracks={this.props.tracks}></ResultsTable>;
    }

    return (
      <div className="results-panel">
        { results }
      </div>
    );
  }
}

export default Results;