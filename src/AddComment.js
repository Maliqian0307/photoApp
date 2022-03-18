import React from 'react';
import {getHeaders} from './utils';

class AddComment extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            value:'',
            postId:this.props.postId
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.requeryPost = this.props.requeryPost.bind(this);
        this.textInput = React.createRef();

    }
    handleChange(e) {
        this.setState({value:e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        const postData = {
            "post_id": this.state.postId,
            "text": this.state.value
        };
        fetch(`https://photo-app-intro-to-web.herokuapp.com/api/comments`, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(() => {
            console.log("submit");
            this.requeryPost();
            this.setState({value:''});
        })
    }

    handleKeyDown(e) {
        if (e.key === 'Enter') {
          console.log('do validate');
        }
    }
  

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder="Add a comment"
                    aria-label="Add a comment" 
                    value={this.state.value} 
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    ref={this.textInput} 
                />
                <button className="postComment">Post</button>
            </form>
        )
    }
}

export default AddComment;