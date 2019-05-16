import React, {useState} from 'react';
import './App.css';
import Posts from './components/Posts'

const App = () => {
  const blogData = [
    {id: 1, title:'All About Luna', body: 'Luna is the best cat ever'},
    {id: 2, title:'More about Luna', body: 'Luna is the best cat ever, she is sooooo cute'},
    {id: 3, title:'Future friends', body: 'One day she will have a best friend named Pugsy'}
  ]

  const [posts, setPosts] = useState(blogData)

  return(
    <div className="container">
      <div className="row">
        <div className='col-6'>
          <Posts posts={posts} />
        </div>
        <div className="col-6">

        </div>
      </div>
    </div>
  )
}

export default App;
