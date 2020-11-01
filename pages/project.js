import { useEffect } from "react";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      email
    }
  }
`;

const Project = () => {
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
        You're signed in as {viewer.email} goto{" "}
        <Link href="/about">
          <a>about</a>
        </Link>{" "}
        page. or{" "}
        <Link href="/signout">
          <a>signout</a>
        </Link>
      </Layout>
    );
  }

  return <p>Loading...</p>;
};

export default Project;
