import React from 'react';

class Story extends React.Component {  
    
    render () {
        return (
            <div className='story'>
                <img src={ this.props.story.user.thumb_url } 
                    className="pic" 
                    alt={ 'pic for ' + this.props.story.user.username } 
                    />
                <p>{ this.props.story.user.username }</p>
            </div>
        );     
    }
}

export default Story;