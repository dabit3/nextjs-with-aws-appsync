import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import withData from '../withData'
import uuidV4 from 'uuid/v4'

const query = gql`
  query listTodos {
    listTodos {
      items {
        id
        name
        completed
      }
    }
  }
`

const mutation = gql`
  mutation createTodo($id: ID!, $name: String!, $completed: Boolean!) {
    createTodo(input: {
      id: $id,
      name: $name,
      completed: $completed
    }) {
      id
      name
      completed
    }
  }
`

class App extends React.Component {
  state = { todo: '' }
  createTodo = () => {
    const todo = {
      name: this.state.todo,
      id: uuidV4(),
      completed: false
    }
    this.props.createTodo(todo)
    this.setState({ todo: '' })
  }
  render() {
    console.log('props: ', this.props)
    return <div>
      <p>Hello World</p>
      <input value={this.state.todo} onChange={e => this.setState({ todo: e.target.value })} />
      <button onClick={this.createTodo}>Create Todo</button>
      {
        this.props.todos.map((todo, index) => (
          <p key={index}>{todo.name}</p>
        ))
      }
    </div>
  }
}

const AppWithTodos = compose(
  graphql(mutation, {
    props: props => ({
      createTodo: todo => {
        props.mutate({ variables: todo })
      }
    })
  }),
  graphql(query, {
    options: {
      fetchPolicy: 'cache-and-network'
    },
    props: props => ({ todos: props.data.listTodos ? props.data.listTodos.items : [] })
  })
)(App)

export default withData(AppWithTodos)