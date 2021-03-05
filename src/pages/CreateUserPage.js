import React, { useMemo } from 'react'

import UserForm from '../components/UserForm'
import { CreateUserProvider, useCreateUser } from '../contexts/CreateUserContext'

const CreateUserPage = () => {
  const initialData = useMemo(
    () => ({
      _id: null,
      name: '',
      active: true,
      phones: [],
    }),
    [],
  )
  return (
    <CreateUserProvider initialState={initialData}>
      <UserForm title="Create user" useHook={useCreateUser} />
    </CreateUserProvider>
  )
}

export default CreateUserPage
