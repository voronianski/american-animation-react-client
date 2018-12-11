import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { ApolloProvider } from 'react-apollo';

import config from './config';
import App from './components/App';

import './index.css';

const cache = new InMemoryCache();

persistCache({
  storage: window.localStorage,
  key: config.cacheKey,
  maxSize: false,
  cache
});

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: config.apiUrl }),
  cache
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
