import React from 'react'
import Friend from '../Friend/Friend'

export const FriendsList = ( {friends} ) => {
  return (
    <ul>
    {friends.map((friend) => (
      <Friend key={friend.id} friend={friend} />
    ))}
    </ul>
  )
}