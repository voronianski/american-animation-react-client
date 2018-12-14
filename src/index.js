import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { ApolloProvider } from 'react-apollo';
import { Provider as ReduxProvider } from 'react-redux';

import config from './config';
import App from './App';
import configureStore from './store/configureStore';
import { populateFavoritedCartoons } from './store/actions';
import sessionUtil from './utils/session';

import './_imports.scss';
import './_index.scss';

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

const store = configureStore();
const savedVideoIds = sessionUtil.getVideoIds();

store.dispatch(populateFavoritedCartoons(savedVideoIds));
store.subscribe(() => {
  const { favoritedCartoons } = store.getState();

  sessionUtil.saveVideoIds(favoritedCartoons);
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
