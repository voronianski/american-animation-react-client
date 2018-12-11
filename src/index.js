import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';

import './index.css';

const cache = new InMemoryCache();

persistCache({
  cache,
  storage: window.localStorage,
  key: 'american-animation-cache',
  maxSize: false
});

const apolloClient = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'https://american-animation-graphql-api.herokuapp.com/graphql'
  })
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
