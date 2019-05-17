import React, {useState} from 'react';
import './App.css';
import Posts from './components/Posts'
import EditPost from './components/EditPost'
import AddPost from './components/AddPost'

const App = () => {
  const blogData = [
    {id: 1, title:'All About Luna', body: 'Luna is the best cat ever'},
    {id: 2, title:'More about Luna', body: 'Luna is the best cat ever, she is sooooo cute'},
    {id: 3, title:'Future friends', body: 'One day she will have a best friend named Pugsy'}
  ]
  const initialState = {id: null, title: '', body: ''}
  
  const [posts, setPosts] = useState(blogData)
  const [currentPost, setCurrentPost] = useState(initialState)
  const [editing, setEditing] = useState(false)

const editPost = post =>{
  console.log(post)
  setEditing(true)
  setCurrentPost({id: post.id, title: post.title, body: post.body})
}

const updatePost = (id, updatedPost) =>{
  setEditing(false)
  setPosts(posts.map(post => post.id === id ? updatedPost : post))
}

const addPost = post => {
  post.id = posts.length + 1
  setPosts([...posts, post])
}

  return(
    <div className="container">
      <div className="row">
        <div className='col-6'>
          <Posts posts={posts}  edit={editPost}/>
        </div>
        <div className="col-6">
        <AddPost addPost={addPost}/>
          {editing ? <EditPost setEditing={setEditing} currentPost={currentPost} editPost={updatePost} /> : ''}
        </div>
      </div>
    </div>
  )
}

export default App;
