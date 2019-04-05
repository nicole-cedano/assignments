import React, { Component } from 'react'
import axios from 'axios'
const postAxios = axios.create()
const PostContext = React.createContext()

postAxios.interceptors.request.use((config) => {
    const token = localStorage.token
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class PostProvider extends Component {
    constrcutor() {
        super()
        this.state = {
            posts: []
        }
    }

    createPost = newPost => {
        postAxios.post("/api/posts", newPost).then(res => {
            console.log(res)
        })
            .catch(err => console.log(err))
    }
    getRecentPosts = () => {
        postAxios.get('/public').then(res => {
            this.setState({ posts: res.data })
        })
    }

    render() {
        retrun(
            <PostContext.Provider
                value={{
                    ...this.state,
                    createPost: this.createPost,
                }}>
                {this.props.children}
            </PostContext.Provider>
        )
    }
}

export default PostProvider

export const withPost = C => props => (
    <PostContext.Consumer>
        {value => <C {...props} {...value} />}
    </PostContext.Consumer>
)