interface TodoListItem {
  text: string
  isCompleted: boolean
}

type ToggleTodo = (selectedTodo: TodoListItem) => void
