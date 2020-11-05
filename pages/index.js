import { gql, useQuery } from "@apollo/client";
import Layout from "../components/layout";
import Link from "next/link";
import Tada from "react-reveal/Tada";

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
          <div className="row mt-5 mr-4">
            <div className="col px-3 ">
              <h1 className="mt-5">Work Anywhere you want!</h1>

              <div className="row mt-5">
                <div className="col">
                  <ul className="list-purple">
                    <li>Waste less time commuting.</li>
                    <li>Don't pay for office space.</li>

                    <li>You can work in your PJ's.</li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="list-purple">
                    <li>You'll be happier.</li>
                    <li>It's easier than ever.</li>
                    <li>Remote teams are effective.</li>
                  </ul>
                </div>
              </div>

              <div className="row my-4">
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
              <Tada>
                <img className="img-fluid" src="/images/work_anywhere.png" />
              </Tada>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container text-left">
        <div className="row mt-5 mr-4">
          <div className="col px-3 ">
            <h1 className="mt-5">
              Create your
              <br /> Dream Team
            </h1>
            <p className="my-5">
              Find the right team members for your project. Harness The Power Of
              Your Dreams. “Teamwork makes the Dreamwork”
            </p>
            <div className="row my-4">
              <div className="col d-flex align-content-stretch flex-wrap">
                <button className="btn btn-purple btn-block">Learn More</button>
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
};

export default Index;
