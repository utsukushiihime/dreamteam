import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../../components/layout";

const Project = () => {
  const router = useRouter();
  const { id, name, description } = router.query;

  return (
    <Layout>
      <h1>Your Projects:</h1>
      <h2>Project Name: {name}</h2>
      <h6>Project Description:</h6>
      <div>
        {description}

        <ul>
          <li>
            <Link
              href="/project/[id]/[comment]"
              as={`/project/${id}/first-comment`}
            >
              <a>First project</a>
            </Link>
          </li>
          <li>
            <Link
              href="/project/[id]/[comment]"
              as={`/project/${id}/second-comment`}
            >
              <a>Second project</a>
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Project;
