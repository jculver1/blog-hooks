import React, {useState} from 'react'

const AddPost = (props) => {

    const initialFormState = {id: null, title: '', body: ''}
    const [post, setPost] = useState(initialFormState)

    const handleInputChange = event => {
        const {name, value} = event.target 
        console.log(event.target.value)
        setPost({ ...post, [name]: value})
    }

    return(
        <div>
            <form 	
            onSubmit={event => {
				event.preventDefault()
				if (!post.title) return
				props.addPost(post)
				setPost(initialFormState)
            }}
             class='mt-5'>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Title</span>
                </div>
                <input class="form-control" aria-label="With textarea" type="text" name="title" value={post.title} onChange={handleInputChange}/>
                </div>
                <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">Body</span>
                </div>
                <textarea class="form-control" aria-label="With textarea" type='text' name='body' value={post.body} onChange={handleInputChange}></textarea>
                </div>
                <button>Add Post</button>
            </form>
        </div>
    )
}

export default AddPost