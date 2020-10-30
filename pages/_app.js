import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faEdit,
  faUserEdit,
  faStar,
  faPlus,
  faUserCircle,
  faSignOutAlt,
  faSignInAlt,
  faUserPlus,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faUserEdit,
  faEdit,
  faStar,
  faPlus,
  faUserCircle,
  faSignOutAlt,
  faSignInAlt,
  faUserPlus,
  faHouseUser
);

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
