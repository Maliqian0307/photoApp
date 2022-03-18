import React from 'react';
import Comment from './Comment';

class Comments extends React.Component {  

    getLastComment () {
        if (this.props.comments && this.props.comments.length > 1) {
            const lastCommentIndex = this.props.comments.length - 1;
            return this.props.comments[lastCommentIndex];
        }
    }
    
    render () {
        if (this.props.comments && this.props.comments.length > 1) {
            const lastComment = this.getLastComment();
            return (<Comment 
                text={lastComment.text} 
                username={lastComment.user.username} 
                display_time={lastComment.display_time} />)
        }
        return (
            <div></div>
        )
    }
}

export default Comments;