import { useEffect } from "react";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      image
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
  const { data, loading, error } = useQuery(ViewerQuery, ProfileQuery);
  const viewer = data?.viewer;
  const profile = data?.profile;
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
              <div className="card mb-4 text-left">
                <div className="card-body">
                  <h5 className="card-title">
                    My Name{" "}
                    <span className="float-right">
                      <a>
                        <FontAwesomeIcon icon="user-edit" />
                      </a>
                    </span>
                  </h5>
                  <img
                    src="https://bit.ly/3kH35mH"
                    className="card-img-top"
                    alt="First Name"
                  ></img>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-purple-outline">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div className="card mb-4 text-left">
                <div className="card-body">
                  <h5 className="card-title">
                    Location{" "}
                    <span className="float-right">
                      <a>
                        <FontAwesomeIcon icon="edit" />
                      </a>
                    </span>
                  </h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-purple-outline">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 text-left">
                <div className="card-body">
                  <h5 className="card-title">Project</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-purple-outline">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div className="card mb-4 text-left">
                <div className="card-body">
                  <h5 className="card-title">Skills</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-purple-outline">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 text-left">
                <div className="card-body">
                  <h5 className="card-title">My Teams</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-purple-outline">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div className="card mb-4 text-left">
                <div className="card-body">
                  <h5 className="card-title">Recommendations</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-purple-outline">
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
