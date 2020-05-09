import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props){
      super(props);
      this.state = {
         term: ''
      }
    }

    search =() => {
      this.props.onSearch(this.state.term);
    } 

    handleTermChange = event => {
       this.setState({
         term: event.target.value
       });
    }

    clearSearch = () => {
      this.props.headerClick.bind(this);
    }

    render(){
        return (
          <div className="SearchBar">
           
            <input placeholder="Enter A Song, Album, or Artist"
            onChange={this.handleTermChange} />
            <button className="SearchButton" onClick={this.search.bind(this)}>SEARCH</button>
          </div>
        );
    }
}

export default SearchBar;