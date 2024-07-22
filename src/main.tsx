import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

import "./index.css";

const TESTING_URI = "https://flyby-router-demo.herokuapp.com/";

const client = new ApolloClient({
  uri: TESTING_URI,
  cache: new InMemoryCache(),
});

// Changed to useQuery.
/* client
  .query({
    query: GET_LOCATIONS,
  })
  .then((result) => console.log(result))
  .catch(console.error); */

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
