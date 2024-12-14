import React from 'react'
import { FriendsList } from './components/FriendsList/FriendsList';
import FormAddFriend from './components/FormAddFriend/FormAddFriend';
import Button from './components/Button/Button';
import FormSplitBill from './components/FormSplitBill/FormSplitBill';


const App = () => {
  return (
    <div className='app'>
      <div className='sidebar'>
      <FriendsList />
      <FormAddFriend />
      <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  )
}

export default App