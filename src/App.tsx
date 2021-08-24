import React from 'react';
import Client from "./Client";
import "./assets/style-sheets/main.scss"
import {Provider} from "react-redux";
import {store} from "./store/reducers/RootReducer"
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: 'https://api.bitsandbytes.me/graphql',
});

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


function App() {
  return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Client/>
        </Provider>
      </ApolloProvider>
  );
}

export default App;
