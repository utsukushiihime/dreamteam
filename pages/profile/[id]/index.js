import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../../../components/layout";

const ProfileQuery = gql`
  query ProfileQuery {
    profile {
      id
      firstName
      lastName
      email
    }
  }
`;

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useQuery(ProfileQuery);
  // FIXME Need to render profile, project, skills info on

  const profile = data?.profile;

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card mb-4 text-left">
              <div className="card-body">
                <h5 className="card-title">
                  <span className="float-right">
                    <Link href="/add-profile">
                      <a>
                        <FontAwesomeIcon icon="user-edit" />
                      </a>
                    </Link>
                  </span>
                </h5>
                <img
                  src="/images/avatars/avatar_7.png"
                  className="card-img-top mx-auto d-block"
                  alt="First Name"
                ></img>
                <small>{id}</small>
                <h3>Dynamic Name</h3>
                <p className="card-text">Software Engineer</p>
              </div>
            </div>
            <div className="card mb-4 text-left">
              <div className="card-body">
                <h6 className="card-title">Location</h6>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 text-left">
              <div className="card-body">
                <h5 className="card-title">Project</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Add Project{" "}
                  <span className="ml-2">
                    <Link href="/add-project">
                      <a>
                        <FontAwesomeIcon icon="plus" />
                      </a>
                    </Link>
                  </span>
                </h6>
                <div className="border-top border-dark my-3">
                  <p className="card-text mt-3">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <a href="/project" className="btn btn-purple-outline btn-block">
                  View Projects
                </a>
              </div>
            </div>
            <div className="card mb-4 text-left">
              <div className="card-body">
                <h5 className="card-title">Skills</h5>
                <h6 className="card-subtitle mb-3 text-muted">
                  Add Skills{" "}
                  <span className="ml-2">
                    <Link href="/add-skill">
                      <a>
                        <FontAwesomeIcon icon="plus" />
                      </a>
                    </Link>
                  </span>
                </h6>
                <div className="border-top border-dark my-3">
                  <p className="card-text mt-3">
                    JavaScript, jQuery, MySQL, Git, Bootstrap RESTful
                    WebServices, LESS, SASS, Node.js, GraphQL, React, Angular,
                    XML SQL, MongoDB, REST API, Python, JSON, Django Next.js,
                    Express, PostgreSQL, PHP, Mongoose, Apollo-Client, Next.js,
                    Vercel, Heroku
                  </p>
                </div>
                <Link href="/assessment">
                  <a className="btn btn-purple-outline btn-block">
                    Take Assessment
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 text-left">
              <div className="card-body">
                <h5 className="card-title">Recommendations</h5>
                <p className="card-text">
                  <FontAwesomeIcon className="mr-2" icon="star" />
                  <FontAwesomeIcon className="mr-2" icon="star" />
                  <FontAwesomeIcon className="mr-2" icon="star" />
                  <FontAwesomeIcon className="mr-2" icon="star" />
                  <FontAwesomeIcon className="mr-2" icon="star" />
                </p>
                <div className="border-top border-dark my-3">
                  <div className="card-text mt-3">
                    <blockquote className="blockquote">
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer className="blockquote-footer">
                        Alan Turing{" "}
                        <cite title="Source Title">Sr. Software Engineer</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <a href="#" className="btn btn-purple btn-block">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card mb-4 text-left">
              <div className="card-body">
                <h5 className="card-title">My Teams</h5>
                <h6 className="card-subtitle mb-3 text-muted">Active Teams</h6>
                <div className="border-top border-dark my-3">
                  <p className="card-text mt-3">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <a href="#" className="btn btn-purple btn-block">
                  Go somewhere
                </a>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
