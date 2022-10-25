import React from 'react'

import ListGroup from 'react-bootstrap/ListGroup'
import CloseButton from 'react-bootstrap/CloseButton'
import FormCheckInput from 'react-bootstrap/FormCheckInput'

interface Props {
  item: TodoListItem
  toggleTodo: ToggleTodo
  deleteTodoItem: DeleteTodoItem
}

export const ListItem: React.FC<Props> = ({
  item,
  toggleTodo,
  deleteTodoItem,
}) => {
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
      <div className="ms-2 me-auto">{item.text}</div>
      <CloseButton
        onClick={() => {
          deleteTodoItem(item.id)
        }}
      />
    </ListGroup.Item>
  )
}
