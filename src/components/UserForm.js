/* eslint-disable react/prop-types */
import React from 'react'

import PhonesForm from './PhonesForm'

const UserForm = (props) => {
  const { title, useHook } = props
  const {
    name, handleNameChange, active, handleActiveChange, userInfo, handleUserInfoChange, onSubmit,
  } = useHook()
  return (
    <form onSubmit={onSubmit}>
      <h4>{title}</h4>
      <input type="text" onChange={handleNameChange} value={name} />
      <input type="checkbox" onChange={handleActiveChange} value={`${active}`} checked={active} />
      <input type="text" name="username" onChange={handleUserInfoChange} value={userInfo?.username} />
      <input type="email" name="email" onChange={handleUserInfoChange} value={userInfo?.email} />
      <PhonesForm useHook={useHook} />
      <button type="submit">Save</button>
    </form>
  )
}

export default UserForm
