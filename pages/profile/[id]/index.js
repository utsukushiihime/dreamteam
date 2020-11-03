import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../../components/layout";

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h1>Post: {id}</h1>

    </Layout>
  );
};

export default Profile;
