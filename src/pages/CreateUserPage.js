import React, { useMemo } from 'react'

import { UserForm, CreateUserProvider, useCreateUser } from '../components/UserForm'

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
