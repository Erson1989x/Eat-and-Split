import React from 'react'
import Button from '../Button/Button'

const FormAddFriend = () => {
  return (
    <form className="form-add-friend">
      <label htmlFor="name">Friend Name</label>
      <input type="text" id="name" />
      <label htmlFor="image">Image URL</label>
      <input type="text" id="image" />
      <Button>Add</Button>
    </form>
  )
}

export default FormAddFriend