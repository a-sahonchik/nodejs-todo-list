import React, { useState } from 'react'

import ListGroup from 'react-bootstrap/ListGroup'
import CloseButton from 'react-bootstrap/CloseButton'
import FormCheckInput from 'react-bootstrap/FormCheckInput'

interface Props {
  item: TodoListItem
  toggleTodo: ToggleTodo
  deleteTodoItem: DeleteTodoItem
  editTodoItem: EditTodoItem
}

export const ListItem: React.FC<Props> = ({
  item,
  toggleTodo,
  deleteTodoItem,
  editTodoItem,
}) => {
  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    editTodoItem(item, e.target.value)
    setIsEditing(false)
  }

  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
      style={{
        textDecoration: item.isCompleted ? 'line-through' : undefined,
        background: item.isCompleted ? '#00ff101c' : 'white',
      }}
    >
      <FormCheckInput
        defaultChecked={item.isCompleted}
        onClick={() => {
          toggleTodo(item)
        }}
      />{' '}
      <div className="ms-2 me-auto">
        {isEditing ? (
          <form>
            <input
              type="text"
              defaultValue={item.text}
              onBlur={handleInputChange}
            />
          </form>
        ) : (
          <span onDoubleClick={() => setIsEditing(true)}>{item.text}</span>
        )}
      </div>
      <span className="text-muted">
        <small>({item.editedAt})</small>
      </span>
      <CloseButton
        onClick={() => {
          deleteTodoItem(item.id)
        }}
      />
    </ListGroup.Item>
  )
}
