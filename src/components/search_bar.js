import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''};
  }

  render() {
    return (
      <div>
        <input
          value= {this.state.term} //retrives term's value
          onChange={event => this.setState({term: event.target.value})} />
      </div>

    );
  }
  onInputChange(event) {
    console.log(event.target.value);
 }
}

// const SearchBar = () => {
//   return <input />;
// }

export default SearchBar;
