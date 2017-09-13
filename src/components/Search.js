import React from 'react'
import Autosuggest from 'react-autosuggest'
import { Route } from 'react-router-dom'
import '../Search.css';

import TeamsAdapter from '../adapters/teamsAdapter'

export default class Search extends React.Component {

	state = {
		teams: [],
		suggestions: [],
		value: ''
	}

	getSuggestions = value => {
	  const inputValue = value.trim().toLowerCase();
	  const inputLength = inputValue.length;

	 return inputLength === 0 ? [] : this.state.teams.filter(team =>
	    team.name.toLowerCase().slice(0, inputLength) === inputValue
	  );
	};

	getSuggestionValue = suggestion => suggestion.name;

	handleClick = (id, history) => {
		history.push(`/teams/${id}`)
	}

	// Use your imagination to render suggestions.
	renderSuggestion = suggestion => (
	  <Route render={ ({ history }) => (<div onClick={() => this.handleClick(suggestion.id, history)} style={{ display: 'table', margin: '10px 20px', width: '100%'}}>
		  	<span style={{ display: 'table-cell', verticalAlign: 'middle'}}><img style={{width: '23px', height: 'auto', marginRight: '8px'}} src={suggestion.crest_url} alt=""/></span>
		    {suggestion.name}
		  </div>
		  )
		} />
	)

	componentDidMount = () => {
		const adapter = new TeamsAdapter()
	    adapter.getAllTeams().then(json => this.setState({teams: json }))
	}

onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search for a Team',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
    	<div className="search-wrapper">
	      <Autosuggest
	        suggestions={suggestions}
	        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
	        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
	        getSuggestionValue={this.getSuggestionValue}
	        renderSuggestion={this.renderSuggestion}
	        inputProps={inputProps}
	      />
      </div>
    );
  }
}
