import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

interface Props {
  addTodoItem: AddTodoItem
}

export const AddItem: React.FC<Props> = ({ addTodoItem }) => {
  const [text, setText] = useState('')

  const { t } = useTranslation()

  return (
    <TextField
      fullWidth
      variant="standard"
      placeholder={t('Add todo here')}
      value={text}
      onChange={(e) => {
        setText(e.target.value)
      }}
      InputProps={{
        endAdornment: (
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              addTodoItem(text)
              setText('')
            }}
          >
            {t('Add todo')}
          </Button>
        ),
      }}
    />
  )
}
