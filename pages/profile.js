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

const Profile = () => {
  const router = useRouter();
  const { data, loading, error } = useQuery(ViewerQuery);
  const viewer = data?.viewer;
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
            <div className="col">Profile Info</div>
            <div className="col">Project/Skills</div>
            <div className="col">My Teams/Recommendations</div>
          </div>
        </div>
      </Layout>
    );
  }

  return <p>Loading...</p>;
};

export default Profile;
