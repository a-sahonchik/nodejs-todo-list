import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

interface Props {
  addTodoItem: AddTodoItem
}

export const AddItem: React.FC<Props> = ({ addTodoItem }) => {
  const [text, setText] = useState('')

  return (
    <div className="mt-5 mb-5">
      <Form>
        <div className="input-group">
          <Form.Control
            type="text"
            value={text}
            placeholder="Add todo here"
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              addTodoItem(text)
              setText('')
            }}
          >
            Add todo
          </Button>
        </div>
      </Form>
    </div>
  )
}
