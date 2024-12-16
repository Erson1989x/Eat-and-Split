import React from "react";
import { FriendsList } from "./components/FriendsList/FriendsList";
import FormAddFriend from "./components/FormAddFriend/FormAddFriend";
import Button from "./components/Button/Button";
import FormSplitBill from "./components/FormSplitBill/FormSplitBill";
import { useState } from "react";
import { initialFriends } from "./components/FriendsList/initialFriends";

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  };

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  };

  const handleSelection = (friend) => {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };

  const hadleSplitBill = (value) => {
    setFriends(friends.map((friend) => friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend))
    setSelectedFriend(null)
  };


  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
        {showAddFriend ? <FormAddFriend onAddFriend={handleAddFriend} /> : ""}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={hadleSplitBill}/>}
    </div>
  );
};

export default App;
