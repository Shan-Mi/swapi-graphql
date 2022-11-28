import PersonDetailPage from '../components/PersonDetailPage/PersonDetailPage'
import Layout from '../components/Layout/Layout'
import usePersonPage from '../hooks/usePersonPage'
import useRouter from '../hooks/useRouter'

const PersonPage = () => {
  const {
    query: { personId },
  } = useRouter()

  if (!personId) return null

  const { loading, data, producers, films, error } = usePersonPage({
    id: personId,
  })

  if (loading || !data || error) return null

  return (
    <Layout>
      <PersonDetailPage films={films} data={data} producers={producers} />
    </Layout>
  )
}

export default PersonPage
