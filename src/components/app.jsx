import React, { Component } from 'react';
import FlatList from './flat_list';
import Flats from '../flats';
import Map from './map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: Flats,
      selectedFlat: Flats[0],
    }
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    })
  }

  render () {
    return (
      <React.Fragment>
        <FlatList flats={this.state.flats} selectFlat={this.selectFlat} selectedFlat={this.state.selectedFlat} />
        <Map selectedFlat={this.state.selectedFlat} />
      </React.Fragment>
    )
  }
}

export default App;
