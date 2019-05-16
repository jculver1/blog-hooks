import React from 'react';

const EditPost = (props) =>{
    console.log(props.post.title)
    return(
        <div class='mt-5'>
            <h3>Edit</h3>
            <form>
                <div class='row'>
                    <input placeholder={props.post.title}/>
                </div>
                <div class='row'>
                    <input placeholder={props.post.body} />
                </div>
            </form>
        </div>
    )
}

export default EditPost