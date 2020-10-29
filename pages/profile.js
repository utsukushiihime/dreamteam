import { useEffect } from "react";
import { useRouter } from "next/router";
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
const ProfileQuery = gql`
  query ProfileQuery {
    profile {
      id
      first_name
      last_name
      title
      email
      address1
      address2
      city
      state
      zip
      country
      bio
      skills
      isAvailable
    }
  }
`;

const Profile = () => {
  const router = useRouter();
  const { data, loading, error } = useQuery(ViewerQuery);
  const viewer = data?.viewer;
  const member = data?.member;
  const shouldRedirect = !(loading || error || viewer);

  useEffect(() => {
    if (shouldRedirect) {
      router.push("/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldRedirect]);

  if (error) {
    return <p>{error.message}</p>;
  }

  if (viewer) {
    return (
      <Layout>
        <div className="container">
          <h1 className="text-center mb-5">Profile</h1>
          <div className="row">
            <div className="col">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Profile</h5>
                  <img src="..." class="card-img-top" alt="..."></img>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Location</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Project</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Skills</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">My Teams</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Recommendations</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return <p>Loading...</p>;
};

export default Profile;
