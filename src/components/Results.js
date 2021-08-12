import React from 'react';
import './Results.css';
import ResultsCards from './ResultsCards';
import ResultsTable from './ResultsTable';

class Results extends React.Component {

  render() {
    let results;
    if (this.props.viewType === 'card') {
      results = <ResultsCards songs={this.props.songs}></ResultsCards>;
    } else if (this.props.viewType === 'table') {
      results = <ResultsTable songs={this.props.songs}></ResultsTable>;
    }

    return (
      <div className="results-panel">
        { results }
      </div>
    );
  }
}

export default Results;