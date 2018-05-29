import gql from 'graphql-tag'
import Client from 'aws-appsync'
import config from '../AppSync'
import { ApolloProvider } from 'react-apollo'

import fetch from 'node-fetch'
global.fetch = fetch

const client = new Client({
  url: config.graphqlEndpoint,
  region: config.region,
  auth: {
    type: config.authenticationType,
    apiKey: config.apiKey
  }
})

const WithProvider = (Component) => () => (
  <ApolloProvider client={client}>
    <Component />
  </ApolloProvider>
)

export default WithProvider
