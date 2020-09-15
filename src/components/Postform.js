import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPost} from '../actions/postActions';

class PostForm extends Component {

    state ={
        title: '',
        body: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value})
      }

    onSubmit = (event) => {
        event.preventDefault();
        const post={
            title: this.state.title,
            body:this.state.body
        }
        this.props.createPost(post);

    }

    render() {

        return (
            <div>
               <h1>Add Post</h1> 
               <form onSubmit={this.onSubmit}>
                   <div>
                       <label>Title: </label> <br/>
                       <input type='text' id = 'title' value={this.state.title} onChange={this.handleChange}/>
                   </div>
                   <br/>
                   <div>
                       <label>Body: </label> <br/>
                       <textarea id="body" value={this.state.body} onChange={this.handleChange}/>
                   </div>
                   <br/>
                   <button type="submit">Submit</button>
               </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, {createPost})(PostForm)

