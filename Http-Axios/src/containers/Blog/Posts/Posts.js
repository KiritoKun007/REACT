import React, { Component } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'

import './Posts.css'
import Post from '../../../components/Post/Post'
import FullPost from '../FullPost/FullPost'

class Posts extends Component {
    state={
        posts: [],
        error: null
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Ashish',
                    }
                })
                this.setState({posts: updatedPosts})
                // console.log(response.data)
            }).catch(error => {
                this.setState({ error: error })
            })
    }

    selectPostHandler = (id) => {
        // this.props.history.push({ pathname: '/' + id })
        this.props.history.push(`/posts/${id}`)
    }

    render() {

        let posts = <p style={{ textAlign: 'center' }}>Something Went Wrong!!!</p>
        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={'/' + post.id} key={post.id} >
                        <Post 
                            key={post.id}
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.selectPostHandler(post.id)} />
                    // </Link>
                ) 
            })
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + `/:id`} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts
