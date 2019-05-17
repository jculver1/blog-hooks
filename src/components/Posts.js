import React from 'react'

const Posts = props => {

    const generatePosts = props.posts.map(post => {
        return(
            <div>
                <div class='card mt-3'>
                    <div class='card-body'>
                        <h5 class="card-title">{post.title}</h5>
                        <p class="card-text">{post.body}</p>
                        <button onClick={() => props.delete(post.id)} class="btn btn-danger mr-1">Delete</button>
                        <button onClick={() => props.edit(post)} class="btn btn-success">Edit</button>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div>
            <h1>Welcome to the Blog</h1>
            {generatePosts}
        </div>
    )
}

export default Posts