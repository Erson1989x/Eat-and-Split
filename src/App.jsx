import React from 'react'
import { FriendsList } from './components/FriendsList/FriendsList';


const App = () => {
  return (
    <div className='app'>
      <div className='sidebar'>
      <FriendsList />
      </div>
    </div>
  )
}

export default App