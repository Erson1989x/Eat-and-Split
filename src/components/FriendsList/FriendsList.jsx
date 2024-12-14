import React from 'react'
import { initialFriends } from './initialFriends'
import Friend from '../Friend/Friend'

export const FriendsList = () => {
  return (
    <ul>
    {initialFriends.map((friend) => (
      <Friend key={friend.id} friend={friend} />
    ))}
    </ul>
  )
}