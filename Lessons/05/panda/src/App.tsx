import { useEffect, useState } from "react"
import { Grid, GridItem, styled } from "../styled-system/jsx"
import { cva } from "../styled-system/css"

interface Todo {
  id: number
  userId: number
  title: string
  completed: boolean
}

const TodoBoxRecipe = cva({
  base: {
    backgroundColor: "red.900",
  },
  variants: {
    completed: {
      true: {
        backgroundColor: "blue.900",
      },
    },
  },
})

const TodoBox = styled("div", TodoBoxRecipe)

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((json) => setTodos(json))
  }, [])

  return (
    <Grid columns={{ base: 1, md: 2, xl: 3 }}>
      {todos.map((todo) => (
        <GridItem key={todo.id}>
          <TodoBox completed={todo.completed} color="white">
            {todo.title}
          </TodoBox>
        </GridItem>
      ))}
    </Grid>
  )
}

export default App
