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
import { Container } from "reactstrap";
import Main from "./components/Main.js";

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
        <Container fluid>
          <Main />
        </Container>
      </ApolloProvider>
    </div>
  );
}
