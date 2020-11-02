import { gql, useQuery } from "@apollo/client";
import Layout from "../components/layout";

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      email
      name
    }
  }
`;

const Index = () => {
  const { data } = useQuery(ViewerQuery);
  const viewer = data?.viewer;

  if (viewer) {
    return (
      <Layout>
        <div className="container text-left">
          <small>Welcome back, {viewer.name}</small>

          <div className="row mt-5">
            <div className="col">
              <h1 className="text-center">
                Create your
                <br /> Dream Team
              </h1>
            </div>
            <div className="col">This is a row</div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container">
        <h1>Welcome</h1>
      </div>
    </Layout>
  );
};

export default Index;
