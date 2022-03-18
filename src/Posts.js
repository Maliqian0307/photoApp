import React from 'react';
import Post from './Post';
import {getHeaders} from './utils';

class Posts extends React.Component {

    constructor(props) {
        super(props);
        // constructor logic
        console.log('Posts component created');
        this.state = {
            posts: null
        }
        this.fetchPosts = this.fetchPosts.bind(this);
    }

    componentDidMount() {
        // fetch posts
        console.log('Posts component mounted');
        this.fetchPosts();
    }

    fetchPosts() {
        fetch('https://photo-app-intro-to-web.herokuapp.com/api/posts', {
            // authentication headers added using 
            // getHeaders() function from src/utils.js
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            console.log(data, ' is the posts');
            this.setState({ posts: data });
        })
    }
 render() {
     if(this.state.posts === null){
         return (
             <div id="posts">
                 Posts are loading...
            </div>
         )
     }
     else {
        return (
            <div id="posts">
                {
                    this.state.posts.map(post => (<Post post={post} key={'post-' + post.id} />))
                }
            </div>
        );
     }
    
    }
}

export default Posts;