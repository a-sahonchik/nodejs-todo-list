interface TodoListItem {
  id: number
  text: string
  isCompleted: boolean
}

type ToggleTodo = (selectedTodo: TodoListItem) => void

type AddTodoItem = (text: string) => void

type DeleteTodoItem = (id: number) => void
