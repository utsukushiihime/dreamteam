import { gql, useQuery } from "@apollo/client";
import Layout from "../components/layout";
import Link from "next/link";

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
            <div className="col px-3">
              <h1>
                Create your
                <br /> Dream Team
              </h1>
              <div className="row">
                <div className="col d-flex align-content-stretch flex-wrap">
                  <button className="btn btn-purple btn-block">
                    Learn More
                  </button>
                </div>
                <div className="col">
                  <Link href="/contact">
                    <button className="btn btn-purple-outline btn-block">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <img className="img-fluid" src="/images/team.png" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container"></div>
    </Layout>
  );
};

export default Index;
