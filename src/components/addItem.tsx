import React, { useState } from 'react'

interface Props {
  addTodoItem: AddTodoItem
}

export const AddItem: React.FC<Props> = ({ addTodoItem }) => {
  const [text, setText] = useState('')

  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault()
          addTodoItem(text)
          setText('')
        }}
      >
        Add new item
      </button>
    </form>
  )
}
