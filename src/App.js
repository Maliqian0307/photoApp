import React from 'react';
import NavBar from './NavBar';
import Stories from './Stories';
import Suggestions from './Suggestions';
import Posts from './Posts';
import Profile from './Profile';

class App extends React.Component {  

    render () {
        return (
            <div>
            <nav className="main-nav">
                <h1>Photo App</h1>
                <NavBar />
            </nav>
            <aside>
                <header>
                    <Profile />
                </header>
                <div className="suggestions">
                    <p className="suggestion-text">Suggestions for you</p>
                    <div>
                        <Suggestions />
                    </div>
                </div>
            </aside>

            <main className="content">
                
                <header className="stories">
                    <Stories />
                </header>

                <div id="posts">
                    <Posts />
                </div>

            </main>

            </div>
        );
    }
}

export default App;