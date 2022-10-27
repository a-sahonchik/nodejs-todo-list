import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

interface Props {
  addTodoItem: AddTodoItem
}

export const AddItem: React.FC<Props> = ({ addTodoItem }) => {
  const [text, setText] = useState('')

  const { t } = useTranslation()

  return (
    <div className="mt-5 mb-5">
      <Form>
        <div className="input-group">
          <Form.Control
            type="text"
            value={text}
            placeholder={t('Add todo here')}
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
            {t('Add todo')}
          </Button>
        </div>
      </Form>
    </div>
  )
}
