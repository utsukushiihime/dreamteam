import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../../components/layout'

const Project = () => {
  const router = useRouter()
  const { id, name, description } = router.query

  return (
    <Layout>
     <h1>Your Projects:</h1>
     <h2>Project Name: {name}</h2>
     <h6>
       Project Description:
      </h6>
     <p>
      {description}
     </p>
     
    </Layout>
  )
}

export default Project