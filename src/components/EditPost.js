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
                <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Title</span>
                </div>
                    <input class="form-control" aria-label="With textarea" type="text" name='title' value={post.title} onChange={handleInputChange} />
                </div>
                </div>
                <div class='row'>

                <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Title</span>
                </div>
                    <input class="form-control" aria-label="With textarea" type="text" name='body' value={post.body} onChange={handleInputChange} />
                </div>
                </div>
                <button type="button" class="btn btn-primary">Save</button>
                <button onClick={() => props.setEditing(false)} type="button" class="btn btn-primary ml-2">Cancel</button>
            </form>
        </div>
    )
}

export default EditPost