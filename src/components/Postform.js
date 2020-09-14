import React, { Component } from 'react'

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

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'Post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data))
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

export default PostForm;

