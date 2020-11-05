import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card mb-4 text-left">
              <div className="card-body">
                <h5 className="card-title">React, Apollo & GraphQL App</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  <i class="fab fa-edit    "></i> Edit Project{" "}
                  <span className="ml-2">
                    <Link href="/project/edit">
                      <a>
                        <FontAwesomeIcon icon="edit" />
                      </a>
                    </Link>
                  </span>
                </h6>
                <div className="border-top border-dark my-3">
                  <p className="card-text mt-3">
                    App for finding team members for a specific project. The app
                    will allow developers, writers, designers, and other
                    freelancers and/or professionals to join the platform,
                    invite and accept invites to join a team and participate in
                    different projects to earn money.
                  </p>
                </div>
                <Link href="/project/all">
                  <a className="btn btn-purple-outline btn-block">
                    View Project
                  </a>
                </Link>
              </div>
            </div>
            <div className="card mb-4 text-left">
              <div className="card-body">
                <h5 className="card-title">Wayfarer Python Django</h5>
                <h6 className="card-subtitle mb-3 text-muted">
                  Edit Project{" "}
                  <span className="ml-2">
                    <Link href="/project/edit">
                      <a>
                        <FontAwesomeIcon icon="edit" />
                      </a>
                    </Link>
                  </span>
                </h6>
                <div className="border-top border-dark my-3">
                  <p className="card-text mt-3">
                    We have been commissioned to build a travel community,
                    code-named Project Wayfarer for now, for users to share tips
                    (AKA posts) about their favorite locations around the world.
                  </p>
                </div>
                <Link href="/project">
                  <a className="btn btn-purple-outline btn-block">
                    View Project
                  </a>
                </Link>
              </div>
            </div>
          </div>{" "}
          <div className="col">
            <div className="card mb-4 text-left">
              <div className="card-body">
                <h5 className="card-title">Planet Pizzeria</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Edit Project{" "}
                  <span className="ml-2">
                    <Link href="/project/edit">
                      <a>
                        <FontAwesomeIcon icon="edit" />
                      </a>
                    </Link>
                  </span>
                </h6>
                <div className="border-top border-dark my-3">
                  <p className="card-text mt-3">
                    This will be an application built for a local pizzeria where
                    at its most basic functionality will allow a user to access
                    the app, open a menu to view item options, build and edit an
                    order from menu items, and complete an order purchase whilst
                    simultaneously creating a user profile.
                  </p>
                </div>
                <Link href="/project/all">
                  <a className="btn btn-purple-outline btn-block">
                    View Project
                  </a>
                </Link>
              </div>
            </div>
            <div className="card mb-4 text-left">
              <div className="card-body">
                <h5 className="card-title">Macon Trouble</h5>
                <h6 className="card-subtitle mb-3 text-muted">
                  Edit Project{" "}
                  <span className="ml-2">
                    <Link href="/project/edit">
                      <a>
                        <FontAwesomeIcon icon="edit" />
                      </a>
                    </Link>
                  </span>
                </h6>
                <div className="border-top border-dark my-3">
                  <p className="card-text mt-3">
                    Timple turn based RPG built with Javascript and CSS. User
                    selects a class and moves through several monsters before
                    facing a final boss. User must survive the encounters to
                    win.{" "}
                  </p>
                </div>
                <Link href="/project">
                  <a className="btn btn-purple-outline btn-block">
                    View Project
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Project;
