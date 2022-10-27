import React, { useState } from 'react'

import List from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import Checkbox from '@mui/material/Checkbox'
import CloseIcon from '@mui/icons-material/Close'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

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
    <List
      className="d-flex justify-content-between align-items-start"
      style={{
        textDecoration: item.isCompleted ? 'line-through' : undefined,
        background: item.isCompleted ? '#00ff101c' : 'white',
      }}
    >
      <Box>
        <Checkbox
          defaultChecked={item.isCompleted}
          onClick={() => {
            toggleTodo(item)
          }}
        />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        {isEditing ? (
          <TextField
            /* eslint-disable-next-line jsx-a11y/no-autofocus */
            autoFocus
            fullWidth
            maxRows={4}
            defaultValue={item.text}
            onBlur={handleInputChange}
            variant="standard"
          />
        ) : (
          <Typography
            noWrap
            sx={{
              mr: 1,
              fontSize: { xs: '0.8em', md: '1em' },
              color: 'inherit',
              textDecoration: 'none',
            }}
            onDoubleClick={() => setIsEditing(true)}
          >
            {item.text}
          </Typography>
        )}
      </Box>
      <Box>
        <Typography
          noWrap
          sx={{
            mr: 1,
            fontSize: { xs: '0.8em', md: '1em' },
          }}
          onDoubleClick={() => setIsEditing(true)}
        >
          {item.editedAt}
        </Typography>
      </Box>
      <Box>
        <IconButton
          onClick={() => {
            deleteTodoItem(item.uuid)
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </List>
  )
}
