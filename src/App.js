import "./styles.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  HttpLink,
  gql,
  from
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location }) =>
      console.log(alert(`Graphql error ${message} \n Location: ${location}`))
    );
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://codesandbox.io/s/pedantic-lamarr-reutp7" })
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

export default function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <h1>Hello CodeSandbox test</h1>
        <h2>Start editing to see some magic happen!</h2>
      </ApolloProvider>
    </div>
  );
}
