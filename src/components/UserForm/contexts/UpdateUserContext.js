import React, { createContext, useCallback, useContext } from 'react'

import { useUserForm } from '../hooks/useUserForm'

export const UpdateUserContext = createContext()

export const UpdateUserProvider = (props) => {
  const { initialState, children } = props
  const [userFormState, handleStateChange] = useUserForm(initialState)
  // const [UpdateUserMutation] = useMutation(UPDATE_USER_MUTATION)
  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      console.log(userFormState)
      const record = {

      }
      console.log(record)
      // await UpdateUserMutation({ variables: { record } })
    },
    [userFormState],
  )
  return (
    <UpdateUserContext.Provider value={{ ...userFormState, ...handleStateChange, onSubmit }}>
      {children}
    </UpdateUserContext.Provider>
  )
}

export const useUpdateUser = () => useContext(UpdateUserContext)
