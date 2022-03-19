import React from 'react';

class NavBar extends React.Component {  

    constructor(props) {
        super(props);
        console.log('NavBar component created');
    }

    componentDidMount() {
        console.log('NavBar component mounted');
    }

    render () {
        return (
            <nav className="main-nav">
                <h1>{this.props.title}</h1>
                <ul>   
                    <li><a href="https://photo-app-secured.herokuapp.com/api">API Docs</a></li>
                    <li><span>username</span></li>
                    <li><a href="/logout">Sign out</a></li>
                </ul> 
            </nav>       
        );
    }
}

export default NavBar;