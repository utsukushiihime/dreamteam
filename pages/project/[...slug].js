import { useRouter } from 'next/router';
import Layout from '../../components/layout';

const AllProjects = () => {
  const router = useRouter()
  const slug = router.query.slug || []

  return (
    <>
      <h1>Slug: {slug.join('/')}</h1>
    </>
  )
}

export default AllProjects