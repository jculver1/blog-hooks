import React, {useState, useEffect} from 'react';


const EditPost = props =>{

    const [currentPost, setPost] = useState(props.post)

    useEffect(
        () => {
            setPost(props.post)
        },
        [ props ]
      )

    const handleInputChange = event => {
        const {name, value} = event.target
        console.log(event.target)
        setPost({ ...currentPost, [name]: value})
    }

    console.log(props.post.title)
    return(
        <div class='mt-5'>
            <h3>Edit</h3>
            <form>
                <div class='row'>
                    <input value={props.post.title} onChange={handleInputChange} />
                </div>
                <div class='row'>
                    <input value={props.post.body} onChange={handleInputChange} />
                </div>
                <button onClick={event => {
                    event.preventDefault()
                    props.updatePost(props.post.id, currentPost)
                }}>Save</button>
                <button>Cancel</button>
            </form>
        </div>
    )
}

export default EditPost