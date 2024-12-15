import React from 'react'
import { FriendsList } from './components/FriendsList/FriendsList';
import FormAddFriend from './components/FormAddFriend/FormAddFriend';
import Button from './components/Button/Button';
import FormSplitBill from './components/FormSplitBill/FormSplitBill';
import { useState } from 'react';
import { initialFriends } from './components/FriendsList/initialFriends';


const App = () => {
  const [friends, setFriends] = useState(initialFriends)
  const [showAddFriend, setShowAddFriend] = useState(false) 

  const handleShowAddFriend = () => {
    setShowAddFriend(!showAddFriend)
  }

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend])
    setShowAddFriend(false)
  }
  return (
    <div className='app'>
      <div className='sidebar'>
      <FriendsList friends={friends} />
      {showAddFriend ? <FormAddFriend  onAddFriend={handleAddFriend}/> : ''}
      <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
      </div>
      <FormSplitBill />
    </div>
  )
}

export default App