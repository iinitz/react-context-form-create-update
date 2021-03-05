import React, { useMemo } from 'react'

import { UserForm, UpdateUserProvider, useUpdateUser } from '../components/UserForm'

const UpdateUserPage = () => {
  // const { loading, error, data } = useQuery(USER_ID_QUERY, {..})
  const initialData = useMemo(
    () => ({
      _id: 'TEST_ID_1',
      name: 'Test',
      active: false,
      phones: ['0812345678'],
    }),
    [],
  )
  return (
    <UpdateUserProvider initialState={initialData}>
      <UserForm title="Update user" useHook={useUpdateUser} />
    </UpdateUserProvider>
  )
}

export default UpdateUserPage
