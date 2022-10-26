interface TodoListItem {
  uuid: string
  text: string
  isCompleted: boolean
  editedAt: string
}

type ToggleTodo = (selectedTodo: TodoListItem) => void

type AddTodoItem = (text: string) => void

type DeleteTodoItem = (uuid: string) => void

type EditTodoItem = (selectedTodo: TodoListItem, newText: string) => void
