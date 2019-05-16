import React from 'react'

const Posts = props => {

    const generatePosts = props.posts.map(post => {
        return(
            <div>
                <div class='card'>
                    <div class='card-body'>
                        <h5 class="card-title">{post.title}</h5>
                        <p class="card-text">{post.body}</p>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div>
            {generatePosts}
        </div>
    )
}

export default Posts