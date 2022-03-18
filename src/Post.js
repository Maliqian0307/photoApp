import React from 'react';
import {getHeaders} from './utils';
import LikeButton from './LikeButton';
import BookmarkButton from './BookmarkButton';
import Comments from './Comments';
import AddComment from './AddComment';

class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            post: this.props.post
        }
        this.requeryPost = this.requeryPost.bind(this);
    }

    requeryPost() {
        fetch(`https://photo-app-secured.herokuapp.com/api/posts/${this.state.post.id}`, {
                headers: getHeaders()
            })
            .then(response => response.json())
            .then(data => {
                this.setState({ 
                    post: data
                });
            });
    }

    render () {
        const post = this.state.post;
        if (!post) {
            return (
                <div></div>  
            );
        }
        return (
            <section className="card">
                <div className="header">
                    <h3>{ post.user.username }</h3>
                    <i className="fa fa-dots"></i>
                </div>
                
                <img 
                    src={ post.image_url } 
                    alt={'Image posted by ' +  post.user.username } 
                    width="300" 
                    height="300" />
                
                <div className="info">
                    <div className='buttons'>
                        <div className='leftThreeButtons'> 
                            <LikeButton 
                                postId={post.id} 
                                likeId={post.current_user_like_id}
                                requeryPost={this.requeryPost} />
                            <i className="far fa-comment"></i>
                            <i className="far fa-paper-plane"></i>
                        </div>
                        
                        <BookmarkButton 
                                postId={post.id} 
                                bookmarkId={post.current_user_bookmark_id}
                                requeryPost={this.requeryPost} />
                    </div>
                    <p>{ post.caption }</p>
                    <Comments comments={post.comments} />
                    <AddComment requeryPost={this.requeryPost} postId={post.id} />
                </div> 
            </section> 
        );     
    }
}

export default Post;