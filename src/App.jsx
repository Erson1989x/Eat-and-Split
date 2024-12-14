import React from 'react'
import { FriendsList } from './components/FriendsList/FriendsList';
import FormAddFriend from './components/FormAddFriend/FormAddFriend';
import Button from './components/Button/Button';
import FormSplitBill from './components/FormSplitBill/FormSplitBill';
import { useState } from 'react';


const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false) 

  const handleShowAddFriend = () => {
    setShowAddFriend(!showAddFriend)
  }

  return (
    <div className='app'>
      <div className='sidebar'>
      <FriendsList />
      {showAddFriend ? <FormAddFriend /> : ''}
      <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
      </div>
      <FormSplitBill />
    </div>
  )
}

export default App