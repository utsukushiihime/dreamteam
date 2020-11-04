import { useRouter } from 'next/router'
import Header from '../../../components/header'

const Projects = () => {
  const router = useRouter()
  const { id, projects } = router.query

  return (
    <>
      <Header />
      <h1>ID: {id}</h1>
      <h1>Project: {projects}</h1>
    </>
  )
}

export default Projects