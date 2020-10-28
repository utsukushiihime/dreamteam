import { gql, useQuery } from "@apollo/client";
import Layout from "../components/layout";

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      email
    }
  }
`;

const Index = () => {
  const { data } = useQuery(ViewerQuery);
  const viewer = data?.viewer;

  if (viewer) {
    return (
      <Layout>
        <h1>Home</h1>
      </Layout>
    );
  }

  return <Layout>Welcome.</Layout>;
};

export default Index;
