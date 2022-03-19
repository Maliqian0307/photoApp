import React from 'react';
import {getHeaders} from './utils';

class Suggestion extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            following_id: null
        }
        this.toggleFollow = this.toggleFollow.bind(this);
        this.follow = this.follow.bind(this);
        this.unfollow = this.unfollow.bind(this);
    }

    toggleFollow(ev) {
        if (this.state.following_id) {
            console.log('unfollow');
            this.unfollow();
        } else {
            console.log('follow');
            this.follow();
        }
    }

    follow() {
        fetch('https://photo-app-secured.herokuapp.com/api/following', {
                headers: getHeaders(),
                method: 'POST',
                body: JSON.stringify({ user_id: this.props.suggestion.id })
            })
            .then(response => response.json())
            .then(data => {
                this.setState({ following_id: data.id });
            })
    }

    unfollow() {
        fetch(`https://photo-app-secured.herokuapp.com/api/following/${this.state.following_id}`, {
                headers: getHeaders(),
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ following_id: null });
                console.log(this.state);
            })
    }
    
    render () {
        if (!this.props.suggestion) {
            return (
                <div>suggestion</div>  
            );
        }
        return (
            <section id={ 'suggestion-' + this.props.suggestion.id }>
                <img 
                    src={ this.props.suggestion.thumb_url } 
                    className="pic" 
                    alt={ 'Profile pic for ' + this.props.suggestion.username } />
                <div>
                    <p>{ this.props.suggestion.username }</p>
                    <p>suggested for you</p>
                </div>
                <div>
                    <button 
                        aria-label={ 'follow ' + this.props.suggestion.username }
                        aria-checked="false" 
                        role="switch"
                        onClick={this.toggleFollow}
                        >
                    {this.state.following_id ? 'unfollow' : 'follow'}
                    </button>
                </div>
            </section>
        );     
    }
}

export default Suggestion;