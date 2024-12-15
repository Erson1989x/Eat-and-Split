import React from 'react'
import Button from '../Button/Button'
import { useState } from 'react'

const FormAddFriend = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !image) return

    const id = crypto.randomUUID()
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    }

    setName('')
    setImage('https://i.pravatar.cc/48')

    console.log(newFriend)
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="name">Friend Name</label>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
      <label htmlFor="image">Image URL</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      <Button>Add</Button>
    </form>
  )
}

export default FormAddFriend