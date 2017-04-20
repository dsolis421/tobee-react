import React, { Component } from 'react';

class ShelterSearch extends Component {
  constructor() {
    super()

    this.state = {
      shelterSearchText: ''
    }
  }

  handleSearchChange(e) {
    this.setState({
      shelterSearchText: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input id="sheltersearch"
          placeholder="Enter Zip Code"
          maxLength="5"
          onChange={event => this.handleSearchChange(event)}></input>
        <span id="sheltersearchgo" className="fa fa-search"></span>
        <span>Powered by <a href="www.petfinder.com" target="blank">Petfinder</a></span>
      </div>
    );
  }
}

export default ShelterSearch;
