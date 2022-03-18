import React from 'react';
import Suggestion from './Suggestion';
import {getHeaders} from './utils';

class Suggestions extends React.Component {  
    constructor(props) {
        super(props);
        this.state = { 
            suggestions: null 
        };
        this.fetchSuggestions = this.fetchSuggestions.bind(this);
    }

    componentDidMount() {
        this.fetchSuggestions();
    }

    fetchSuggestions() {
        fetch('https://photo-app-intro-to-web.herokuapp.com/api/suggestions', {
                headers: getHeaders()
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ suggestions: data });
            })
    }

    render () {
        if (!this.state.suggestions) {
            return (
                <div></div>  
            );
        }
        return (
            this.state.suggestions.map(suggestion => {
                return (
                    <Suggestion user={suggestion} key={'suggestion-' + suggestion.id} />
                )
            })
        );     
    }
}

export default Suggestions;