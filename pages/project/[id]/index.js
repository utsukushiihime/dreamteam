import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../../components/layout'

const Project = () => {
  const router = useRouter()
  const { id, name, description } = router.query

  return (
    <Layout>
     <h1>Project: {id}</h1>
     <h2>Name: {name}</h2>
     
    </Layout>
  )
}

export default Project