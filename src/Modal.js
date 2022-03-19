import React from 'react';
import ReactModal from 'react-modal';
import Comment from './Comment';

class Modal extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
    const post = this.props.post;
      return (
        <div>
          <button className="viewAllComment" onClick={this.handleOpenModal}>view all {this.props.commentLength} comments</button>
          <div>
          <ReactModal className="container"
             isOpen={this.state.showModal}
          >
            <h1>
            <img className="pic" 
            alt="user pic" 
            src={post.user.thumb_url} /> 
            {post.user.username}
            </h1>
            <div className="modalAll">
                <img src={post.image_url } />
                <div className="allCommentBody">
                {
                    post.comments.map(comment => {
                        return (
                            <Comment 
                                key={'modal-comment-' + comment.id}
                                text={comment.text} 
                                username={comment.user.username} 
                                display_time={comment.display_time} />
                        )
                    })
                }
                </div>
               
            </div>
                 
           
            <button className="close" onClick={this.handleCloseModal}> <i className="fas fa-times"></i></button>
          </ReactModal>
          </div>
        </div>
      );
    }
  }




  
export default Modal;