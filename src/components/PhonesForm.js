import React, { useCallback } from 'react'

const PhonesForm = (props) => {
  const { useHook } = props
  const { phones, updatePhones } = useHook()
  const handleAddPhone = useCallback(
    () => {
      const newPhone = `0${Math.floor(Math.random() * 1000000000)}`
      updatePhones((prev) => ([...prev, newPhone]))
    },
    [updatePhones],
  )
  return (
    <div>
      <h4>Phones</h4>
      <button type="button" onClick={handleAddPhone}>Add</button>
      <ul>
        {phones.map((phone) => (<li key={phone}>{phone}</li>))}
      </ul>
    </div>
  )
}

export default PhonesForm
