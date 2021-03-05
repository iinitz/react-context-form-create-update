import { useCallback, useState } from 'react'

export const useUserForm = (initialState) => {
  const [id] = useState(initialState?._id ?? null)
  const [name, setName] = useState(initialState?.name ?? '')
  const [active, setActive] = useState(initialState?.active ?? true)
  const [userInfo, setUserInfo] = useState({ username: '', email: '' })
  const [phones, setPhones] = useState(initialState?.phones ?? [])
  const handleNameChange = useCallback(
    (e) => {
      setName(e.target.value)
    },
    [],
  )
  const handleActiveChange = useCallback(
    () => {
      setActive((prev) => (!prev))
    },
    [],
  )
  const handleUserInfoChange = useCallback(
    (e) => {
      const { name: inputName, value } = e.target
      setUserInfo((prev) => ({ ...prev, [inputName]: value }))
    },
    [],
  )
  // const createPhone = useCallback(
  //   async (data) => {

  //   },
  //   [],
  // )
  // const updatePhone = useCallback(
  //   async (id, data) => {

  //   },
  //   [],
  // )
  // const deletePhone = useCallback(
  //   async (id) => {

  //   },
  //   [],
  // )
  return [
    {
      id,
      name,
      active,
      phones,
      userInfo,
    },
    {
      handleNameChange,
      handleActiveChange,
      updatePhones: setPhones,
      handleUserInfoChange,
    },
  ]
}
