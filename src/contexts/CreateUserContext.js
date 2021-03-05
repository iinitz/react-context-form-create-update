import React, { createContext, useCallback, useContext } from 'react'

import { useUserForm } from '../hooks/useUserForm'

const CreateUserContext = createContext()

export const CreateUserProvider = (props) => {
  const { initialState, children } = props
  const [userFormState, handleStateChange] = useUserForm(initialState)
  // const [createUserMutation] = useMutation(CREATE_USER_MUTATION)
  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      console.log(userFormState)
      const record = {

      }
      console.log(record)
      // await createUserMutation({ variables: { record } })
    },
    [userFormState],
  )
  return (
    <CreateUserContext.Provider value={{ ...userFormState, ...handleStateChange, onSubmit }}>
      {children}
    </CreateUserContext.Provider>
  )
}

export const useCreateUser = () => useContext(CreateUserContext)

export default CreateUserContext
