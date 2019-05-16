import React, {useState} from 'react';
import './App.css';
import Posts from './components/Posts'
import EditPost from './components/EditPost'

const App = () => {
  const blogData = [
    {id: 1, title:'All About Luna', body: 'Luna is the best cat ever'},
    {id: 2, title:'More about Luna', body: 'Luna is the best cat ever, she is sooooo cute'},
    {id: 3, title:'Future friends', body: 'One day she will have a best friend named Pugsy'}
  ]

  const [posts, setPosts] = useState(blogData)

  const initialState = {id: null, title: '', body: ''}

  const [post, setCurrentPost] = useState(initialState)

  const [editing, setEditing] = useState(false)

  const edit = post => {
    setEditing(true)
    setCurrentPost({ id: post.id, title: post.title, body: post.body })
  }

  return(
    <div className="container">
      <div className="row">
        <div className='col-6'>
          <Posts posts={posts}  edit={edit}/>
        </div>
        <div className="col-6">
          {editing ? <EditPost post={post}/> : ''}
        </div>
      </div>
    </div>
  )
}

export default App;
