import React, {useState, useEffect} from 'react';


const EditPost = props =>{
    const [post, setPost] = useState(props.currentPost)

    useEffect(
        () => {
            setPost(props.currentPost)
        },
        [props]
    )
    const handleInputChange = event => {
        const {name, value} = event.target 
        setPost({ ...post, [name]:value})
    }

    return(
        <div class='mt-5'>
            <h3>Edit</h3>
            <form 
                onSubmit={event => {
                event.preventDefault()
                props.editPost(post.id, post)
            }}
            >
                <div class='row'>
                    <input name='title' value={post.title} onChange={handleInputChange} />
                </div>
                <div class='row'>
                    <input name='body' value={post.body} onChange={handleInputChange} />
                </div>
                <button>Save</button>
            </form>
        </div>
    )
}

export default EditPost