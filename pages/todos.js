import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import WithProvider from './WithProvider'

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

class Todos extends React.Component {
  render() {
    console.log('props: ', this.props)
    return <div>
      <p>Hello World</p>
    </div>
  }
}

const TodosWithData = graphql(query, {
  options: {
    fetchPolicy: 'cache-and-network'
  },
  props: props => ({ todos: props.data.listTodos ? props.data.listTodos.items : [] })
})(Todos)

export default WithProvider(TodosWithData)