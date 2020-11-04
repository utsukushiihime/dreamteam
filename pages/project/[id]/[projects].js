import { useRouter } from "next/router";
import Header from "../../../components/header";

const Projects = () => {
  const router = useRouter();
  const { id, projects } = router.query;

  return (
    <>
      <Header />
      <h1>Post: </h1>
      <h1>Comment: </h1>
    </>
  );
};

export default Projects;
