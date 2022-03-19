import React from 'react';
import {getHeaders} from './utils';

class Profile extends React.Component {  

    constructor(props) {
        super(props);
        this.state = { profile: null };
        this.fetchProfile = this.fetchProfile.bind(this);
    }

    componentDidMount() {
        this.fetchProfile();
    }

    fetchProfile() {
        fetch('https://photo-app-secured.herokuapp.com/api/profile', {
                headers: getHeaders()
            })
            .then(response => response.json())
            .then(data => {
                this.setState({ profile: data });
            })
    }

    render () {
        if (!this.state.profile) {
            return (
                <div></div>  
            );
        }
        return (
            <div>
                <img 
                    src={ this.state.profile.thumb_url } 
                    className="pic"
                    alt={'Profile pic for '+ this.state.profile.username } />
                <h1>{ this.state.profile.username }</h1>    
            </div>  
        );
    }
}

export default Profile;